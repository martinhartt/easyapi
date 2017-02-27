export default function (sequelize, DataTypes) {
  const Endpoint = sequelize.define('Endpoint', {
    instructions: DataTypes.STRING,
    mode: DataTypes.STRING,
    path: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        Endpoint.belongsTo(models.Service, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Endpoint;
}