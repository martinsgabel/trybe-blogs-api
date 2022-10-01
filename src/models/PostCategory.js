const PostsCategoriesModel = (sequelize, DataTypes) => {
  const PostsCategoriesSchema = sequelize.define('posts_categories', 
    {},
    {
      timestamps: false,
      underscored: true, 
      tableName: 'posts_categories'
    },
  );

  PostsCategoriesSchema.associate = (models) => {
    models.BlogPosts.belongsToMany(models.CategoriesSchema, {
      as: 'categories',
      through: PostsCategoriesSchema,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
     models.CategoriesSchema.belongsToMany(models.BlogPostsSchema, {
      as: 'blog_posts',
      through: UserBook,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategoriesSchema;
};

module.exports = PostsCategoriesModel;
