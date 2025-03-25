// middleware/auth.js

const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]; // Bearer token
    const decoded = jwt.verify(token, 'your_secret_key'); // Replace with your secret key

    req.user = decoded; // Assuming the decoded token contains user info, including the role

    next();
  } catch (err) {
    return res.status(401).send({ status: false, message: 'Unauthorized' });
  }
};

module.exports = authenticate;
