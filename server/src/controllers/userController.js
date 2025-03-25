const userModel = require("../models/userModel");
const roleCheck = require("../middlewares/roleCheck.js");
const bcrypt = require("bcryptjs"); // For password hashing and comparison
const jwt = require("jsonwebtoken"); // For generating a JWT token

const createUser = async (req, res) => {
  try {
    const data = req.body;

    const createdUser = await userModel.create(data);

    res
      .status(201)
      .send({ status: true, data: createdUser, message: "User created" });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const Users = await userModel.find();

    res.status(200).send({ status: true, data: Users, message: "all users" });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const createUserForRBAC = async (req, res) => {
  try {
    await roleCheck("admin")(req, res, async () => {
      const data = req.body;

      const createdUser = await userModel.create(data);

      res
        .status(201)
        .send({ status: true, data: createdUser, message: "User created" });
    });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { createUser, getUsers, createUserForRBAC };
