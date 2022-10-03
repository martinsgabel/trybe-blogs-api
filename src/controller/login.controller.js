const loginService = require('../service/login.service');

const login = async (req, res) => {
  const token = await loginService.login(req.body);
  
  if (token.status) return res.status(token.status).json({ message: token.message });

  return res.status(200).json(token);
};

module.exports = {
  login,
};