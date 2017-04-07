export default function (sequelize, DataTypes) {
  const Model = sequelize.define('Model', {
    name: DataTypes.STRING,
    handle: DataTypes.STRING,
    isFindEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isFindOneEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isCreateEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isUpdateEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDeleteEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
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
