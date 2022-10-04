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
    where: { id },
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

  if (!specificPost) return { status: 404, message: 'Post does not exist' };

  return specificPost;
};

module.exports = {
  listPosts,
  listSpecificPosts,
};
