const express = require('express');
const routesLogin = require('./routes/login.router');
const routesUser = require('./routes/user.router');
const routesCategories = require('./routes/categories.router');
const routesPosts = require('./routes/posts.router');

// ...

const app = express();

app.use(express.json());
app.use('/login', routesLogin);
app.use('/user', routesUser);
app.use('/categories', routesCategories);
app.use('/post', routesPosts);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
