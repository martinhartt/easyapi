export default function (sequelize, DataTypes) {
  const Model = sequelize.define('Model', {
    name: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        Model.belongsTo(models.Service, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false,
          },
        });
        Model.hasMany(models.Attribute);
        Model.hasMany(models.Entry);
      },
    },
  });

  return Model;
}
