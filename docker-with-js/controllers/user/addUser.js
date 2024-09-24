const User = require("../../models/user");
const bcrypt = require("bcrypt");

async function addUser(req, res) {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const password = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: password,
    });
    const user = await newUser.save();

    user.password = "";
    delete user.password;
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = addUser;
