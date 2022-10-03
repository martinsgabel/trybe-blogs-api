const { Category } = require('../models');

const listCategories = async () => {
  const list = Category.findAll();
  return list;
};

module.exports = {
  listCategories,
};
