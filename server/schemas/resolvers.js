//TODO Query : get user, get single user, get character, get single character
//*do we want users to have multiple characters?
//TODO Mutation: add user, add character, update user, update character, delete user, delete character

const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {


  },

  Mutation: {
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(context.user._id, args, {
            new: true,
          });
        }
  
        throw AuthenticationError;
      },




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
