const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true, // Ensures the username is unique
    trim: true
  },
  email: {
    type: String,
    required: true,
    // unique: true, // Ensures the username is unique
    trim: true
  },
  password: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('User', userSchema);
