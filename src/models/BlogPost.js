const BlogPostsModel = (sequelize, DataTypes) => {
  const BlogPostsSchema = sequelize.define('BlogPost', {
    id: DataTypes.INTEGER,
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
    BlogPostsSchema.belongsTo(models.User, {
      as: "user",
      foreignKey: "user_id"
    })
  }

  return BlogPostsSchema;
}

module.exports = BlogPostsModel;
