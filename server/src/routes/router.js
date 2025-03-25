const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  createUserForRBAC,
} = require("../controllers/userController.js");
const { loginUser } = require("../controllers/authController.js");
const authenticate = require("../middlewares/auth.js");

// router.post("/userData", createdUser);/
router.route("/userData").post(createUser);
router.route("/userData").get(getUsers);
router.route("/login").post(loginUser);
// router.post("/login", loginUser);
router.post("/create-user", authenticate, createUserForRBAC);

module.exports = router;
