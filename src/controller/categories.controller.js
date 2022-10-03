const categoriesService = require('../service/categories.service');

const listCategories = async (req, res) => {
  const list = await categoriesService.listCategories();

  return res.status(200).json(list);
};

module.exports = {
  listCategories,
};