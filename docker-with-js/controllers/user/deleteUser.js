const User = require("../../models/user");

async function deleteUser(req, res) {
  try {
    const existingUser = await User.findById(req.params.id);
    if (!existingUser) throw new Error("User not found");
    const user = await User.findByIdAndDelete(req.params.id).select(
      "-password"
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = deleteUser;
