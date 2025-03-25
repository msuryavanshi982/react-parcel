// authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel'); // Assuming the user model is here

// Secret key for JWT signing
const JWT_SECRET = 'PST'; // Change this to your own secret key

// Login API
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ status: false, message: 'User not found' });
    }

    // Compare provided password with the stored password (hashed)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send({ status: false, message: 'Invalid credentials' });
    }

    // Create JWT Token with user's role
    const token = jwt.sign(
      { userId: user._id, role: user.role }, // Payload includes userId and role
      JWT_SECRET, // Secret key
      { expiresIn: '1h' } // Token expiry time (e.g., 1 hour)
    );

    // Return the token
    res.status(200).send({ status: true, message: 'Login successful', token });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { loginUser };
