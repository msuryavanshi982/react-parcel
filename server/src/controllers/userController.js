const user = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const createdUser = await user.create(data);
    return res.send({ data: createdUser, message: "User created" });
  } catch (err) {
    res.staus(500).send({ message: err });
  }
};

module.exports = createUser;
