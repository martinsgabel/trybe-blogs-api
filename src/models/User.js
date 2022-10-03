const UsersModel = (sequelize, DataTypes) => {
  const UsersSchema = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'users',
    timestamps: false,
  });

  UsersSchema.associate = (models) => {
    UsersSchema.hasMany(models.BlogPost, {
      as: "posts",
      foreignKey: "id"
    })
  }

  return UsersSchema;
};

module.exports = UsersModel;
