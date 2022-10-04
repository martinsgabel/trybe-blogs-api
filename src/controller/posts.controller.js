const postsService = require('../service/posts.service');

const listPosts = async (req, res) => {
  const list = await postsService.listPosts();

  return res.status(200).json(list);
};

const listSpecificPosts = async (req, res) => {
  const { id } = req.params;
  const specificPost = await postsService.listSpecificPosts(id);

  if (specificPost.status) {
    return res.status(specificPost.status).json({ message: specificPost.message });
  } 

  return res.status(200).json(specificPost);
};

module.exports = {
  listPosts,
  listSpecificPosts,
};