const { User } = require("../../models/User");

const login = async (req, res) => {
  return res.status(500).json({ success: false });
};

const signup = async (req, res) => {
  return res.status(500).json({ success: false });
};

const logout = (req, res) => {
  return res.status(404).end();
};

module.exports = {
  login,
  signup,
  logout,
};
