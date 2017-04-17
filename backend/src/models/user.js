import bcrypt from 'bcrypt';

export default function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    passwordHash: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        User.hasMany(models.Service);
      },
      generateHash: password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null),
    },
    instanceMethods: {
      generateHash: password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null),
      validPassword(password) {
        return bcrypt.compare(password, this.passwordHash);
      },
    },
  });

  return User;
}
