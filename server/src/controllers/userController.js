const userModel = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const data = req.body;

    const createdUser = await userModel.create(data);

    res.status(201).send({ status: true, data: createdUser, message: 'User created' });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const getUsers = async (req, res) => {
  try {

    const Users = await userModel.find();

    res.status(200).send({ status: true, data: Users, message: 'all users' });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};




module.exports = {createUser, getUsers};
