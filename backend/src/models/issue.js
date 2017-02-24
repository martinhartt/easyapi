export default function (sequelize, DataTypes) {
  const Issue = sequelize.define('Issue', {
    name: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate(models) {
        Issue.belongsTo(models.User, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false,
          },
        });
      },
    },
  });

  return Issue;
}
