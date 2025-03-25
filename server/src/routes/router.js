const express = require("express");

const router = express.Router();
const { createUser, getUsers } = require("../controllers/userController.js");

// router.post("/userData", createdUser);/
router.route("/userData").post(createUser);
router.route("/userData").get(getUsers);


module.exports = router;
