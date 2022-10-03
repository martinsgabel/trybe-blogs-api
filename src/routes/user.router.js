const express = require('express');
const userController = require('../controller/user.controller');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', tokenValidation, userController.addUser);
routers.get('/', tokenValidation, userController.listUsers);

module.exports = routers;