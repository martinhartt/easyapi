export default function (sequelize, DataTypes) {
  const Attribute = sequelize.define('Attribute', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        Attribute.belongsTo(models.Model, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Attribute;
}