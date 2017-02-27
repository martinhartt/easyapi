import bcrypt from 'bcrypt';

export default function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    passwordHash: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        User.hasMany(models.Service);
      },
      generateHash: password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
    },
    instanceMethods: {
      generateHash: password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null),
      validPassword: function (password) {
        console.log(password, this.passwordHash);
        return bcrypt.compare(password, this.passwordHash);
      }
    }
  });

  return User;
}