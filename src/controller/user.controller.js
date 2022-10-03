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

  return res.status(200).json(usersList);
};

const listSpecificUsers = async (req, res) => {
  const { id } = req.params;
  const specificUser = await userService.listSpecificUsers(id);

  if (specificUser.status) {
    return res.status(specificUser.status).json({ message: specificUser.message });
  } 

  return res.status(200).json(specificUser);
};

module.exports = {
  addUser,
  listUsers,
  listSpecificUsers,
};
