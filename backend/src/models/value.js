export default function (sequelize, DataTypes) {
  const Value = sequelize.define('Value', {
    name: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate(models) {
        Value.belongsTo(models.Attribute, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false,
          },
        });
      },
    },
  });

  return Value;
}
