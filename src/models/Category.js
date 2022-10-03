const CategoriesModel = (sequelize, DataTypes) => {
  const CategoriesSchema = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
