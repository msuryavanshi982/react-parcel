const express = require("express");

const router = express.Router();
const createdUser = require("../controllers/userController.js");

// router.post("/userData", createdUser);/
router.route('/userData').post(createdUser)

module.exports = router;
