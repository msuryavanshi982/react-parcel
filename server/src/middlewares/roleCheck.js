// middleware/roleCheck.js

const roleCheck = (requiredRole) => {
  return (req, res, next) => {
    try {
      // Assume the role is stored in req.user after authentication
      const userRole = req.user.role;

      if (userRole !== requiredRole) {
        return res.status(403).send({
          status: false,
          message: 'You do not have the necessary permissions to perform this action.',
        });
      }

      next(); // Proceed to the next middleware or route handler
    } catch (err) {
      return res.status(500).send({ status: false, message: err.message });
    }
  };
};

module.exports = roleCheck;
