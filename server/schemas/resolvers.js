//TODO Query : get user, get single user, get character, get single character
//*do we want users to have multiple characters?
//TODO Mutation: add user, add character, update user, update character, delete user, delete character
const { User, Character } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("characters");
    },

    singleUser: async (parent, { _id }) => {
      return User.findById({ _id }).populate("characters");
    },
    getAllCharacters: async () => {
      return Character.find();
    },
    singleCharacter: async (parent, { _id }) => {
      return Character.findById({ _id });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },


    updateUser: async (parent, args, context) => {
      //TODO bring back context when login on front end is done
      // console.log(context);
      if (context.user) {
      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        // "656e248f930f2cbb52860f39",
        args,
        {
          new: true,
        }
      );
      // console.log();
      return updatedUser;
      }

      throw new AuthenticationError('User not authenticated');
    },
    deleteUser: async (parent, args, context) => {
      //TODO get context
      if (context.user) {
      const deletedUser = await User.findByIdAndDelete(
        context.user._id,
        // "656e087bf36b5b8ae48bb0b7",
        args,
        {
          new: true,
        }
      );
      }
      return deletedUser;

    },

    // TODO addCharacter

    addCharacter: async (parent, args, context) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: args.userId },
        {
          $addToSet: {
            characters: args.characterId,
          },
        },
        {
          new: true,
        }
      );
      return updatedUser;
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError('wrong');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
