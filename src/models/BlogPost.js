const BlogPostsModel = (sequelize, DataTypes) => {
  const BlogPostsSchema = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: DataTypes.INTEGER,
  },
  {
    tableName: 'blog_posts',
    underscored: true,
    timestamps: false,
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
