export default function (sequelize, DataTypes) {
  const Value = sequelize.define('Value', {
    value: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        Value.belongsTo(models.Entry, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false,
          },
        });
        Value.belongsTo(models.Attribute);
      },
    },
  });

  return Value;
}
