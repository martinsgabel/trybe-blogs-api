const BlogPostsModel = (sequelize, DataTypes) => {
  const BlogPostsSchema = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: DataTypes.INTEGER,
  },
  {
    tableName: 'blog_posts',
    underscored: true
  });

  BlogPostsSchema.associate = (models) => {
    BlogPostsSchema.belongsTo(models.users, {
      as: "user",
      foreignKey: "user_id"
    })
  }

  return BlogPostsSchema;
}

module.exports = BlogPostsModel;
