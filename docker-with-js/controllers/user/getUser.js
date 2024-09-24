const User = require("../../models/user");

async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) throw new Error("User not found");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = getUser;
