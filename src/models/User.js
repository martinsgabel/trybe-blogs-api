const UsersModel = (sequelize, DataTypes) => {
  const UsersSchema = sequelize.define('users', {
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'users',
    timestamps: false,
  });

  // UsersSchema.associate = (models) => {
  //   UsersSchema.hasMany(models.BlogPosts, {
  //     as: "posts",
  //     foreignKey: "id"
  //   })
  // }

  return UsersSchema;
};

module.exports = UsersModel;
