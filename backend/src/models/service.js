export default function (sequelize, DataTypes) {
  const Service = sequelize.define('Service', {
    name: DataTypes.STRING,
    handle: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate(models) {
        Service.belongsTo(models.User, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false,
          },
        });
        Service.hasMany(models.Endpoint);
        Service.hasMany(models.Model);
      },
    },
  });

  return Service;
}
