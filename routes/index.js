const express = require('express');

const customersRouter = require('./customer.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const productsRouter = require('./products.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/customers', customersRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/products', productsRouter);
}

module.exports = routerApi;
