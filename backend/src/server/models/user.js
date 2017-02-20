export default function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    salt: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        User.hasMany(models.Service);
      },
    },
  });

  return User;
}
