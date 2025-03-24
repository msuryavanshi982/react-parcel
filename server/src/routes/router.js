const express = require("express");
const router = express.Router();
const createdUser = require("../controllers/userController");

router.post("/user", createdUser);

module.exports = router;
