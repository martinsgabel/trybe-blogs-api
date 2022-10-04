const { BlogPost, User, Category } = require('../models');

const listPosts = async () => {
  const list = await BlogPost.findAll({ 
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return list;
};

const listSpecificPosts = async (id) => {
  const specificPost = await BlogPost.findAll({ 
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
    where: { id },
  });

  if (!specificPost.length) return { status: 404, message: 'Post does not exist' };

  return specificPost[0];
};

module.exports = {
  listPosts,
  listSpecificPosts,
};
