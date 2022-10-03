const userService = require('../service/user.service');

const addUser = async (req, res) => {
  const newUserToken = await userService.addUser(req.body);
  console.log('CONTROLLER RESP', newUserToken);

  if (newUserToken.status) {
    return res.status(newUserToken.status).json({ message: newUserToken.message });
  } 

  return res.status(201).json(newUserToken);
};

const listUsers = async (req, res) => {
  const usersList = await userService.listUsers();

  return res.status(201).json(usersList);
};

module.exports = {
  addUser,
  listUsers,
};
