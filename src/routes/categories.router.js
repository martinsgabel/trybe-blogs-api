const express = require('express');
const categoriesController = require('../controller/categories.controller');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.get('/', tokenValidation, categoriesController.listCategories);

module.exports = routers;