const User = require("../../models/user");

async function updateUser(req, res) {
  try {
    const existingUser = await User.findById(req.params.id);
    if (!existingUser) throw new Error("User not found");
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).select("-password");

    user.password = "";
    delete user.password;
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = updateUser;
