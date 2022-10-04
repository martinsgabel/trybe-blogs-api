const express = require('express');
const userController = require('../controller/user.controller');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', userController.addUser);
routers.get('/', tokenValidation, userController.listUsers);
routers.get('/:id', tokenValidation, userController.listSpecificUsers);

module.exports = routers;