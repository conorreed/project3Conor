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

    //not sure if we need this. prob just update character?
    // updateUser: async (parent, args, context) => {
    // console.log(context);
    // if (context.user) {
    // return await User.findByIdAndUpdate({_id}, args, {
    //   new: true,
    // });
    // }

    // throw AuthenticationError;
    // },

    updateUser: async (parent, args, context) => {
      //TODO bring back context when login on front end is done
      // console.log(context);
      // if (context.user) {
      const updatedUser = await User.findByIdAndUpdate(
        // context.user._id,
        "656df7c7cc2159f78cb01454",
        args,
        {
          new: true,
        }
      );
      // console.log();
      return updatedUser;
      // }

      // throw new AuthenticationError('User not authenticated');
    },
    deleteUser: async (parent, args, context) => {
      //TODO get context
      const deletedUser = await User.findByIdAndDelete(
        "656e087bf36b5b8ae48bb0b7",
        args,
        {
          new: true,
        }
      );
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

    //TODO remember how to delete and update.
    //*can i just:

    //*    removeCharacter: async (parent, { ID }) => {
    //*    return Character.findOneAndDelete({ _id: ID });
    //*    },

    //*or do i have to :
    // removeCharacter: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     const character = await Character.findOneAndDelete({
    //       _id: _id,

    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { character: character._id } }
    //     );

    //     return character;
    //   }
    //   throw AuthenticationError;
    // },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
