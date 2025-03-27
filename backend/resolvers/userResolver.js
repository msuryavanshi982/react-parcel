// resolvers/userResolver.js
const User = require('../models/user');

const resolvers = {
  Query: {
    getUsers: async () => {
      return await User.find();
    },
    getUser: async (_, { id }) => {
      return await User.findById(id);
    }
  },
  Mutation: {
    createUser: async (_, { name, email, password }) => {
      const newUser = new User({
        name,
        email,
        password
      });
      return await newUser.save();
    }
  }
};

module.exports = resolvers;
