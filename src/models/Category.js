const CategoriesModel = (sequelize, DataTypes) => {
  const CategoriesSchema = sequelize.define('categories', {
    name: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'categories',
    timestamps: false,
  });

  return CategoriesSchema;
};

module.exports = CategoriesModel;
