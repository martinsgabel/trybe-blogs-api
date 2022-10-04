const express = require('express');
const postsController = require('../controller/posts.controller');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.get('/', tokenValidation, postsController.listPosts);
routers.get('/:id', tokenValidation, postsController.listSpecificPosts);

module.exports = routers;