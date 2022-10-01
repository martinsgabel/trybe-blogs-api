const CategoriesModel = (sequelize, DataTypes) => {
  const CategoriesSchema = sequelize.define('Category', {
    id: DataTypes.INTEGER,
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
