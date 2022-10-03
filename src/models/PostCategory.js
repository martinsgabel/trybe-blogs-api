const PostsCategoriesModel = (sequelize, DataTypes) => {
  const PostsCategoriesSchema = sequelize.define('PostCategory', 
    {
      postId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },     
    },
    {
      timestamps: false,
      underscored: true, 
      tableName: 'posts_categories'
    },
  );

  PostsCategoriesSchema.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategoriesSchema,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
     models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostsCategoriesSchema,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategoriesSchema;
};

module.exports = PostsCategoriesModel;
