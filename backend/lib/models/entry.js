export default function (sequelize, DataTypes) {
  const Entry = sequelize.define('Entry', {
    index: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        Entry.belongsTo(models.Model, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
        Entry.hasMany(models.Value);
      }
    }
  });

  return Entry;
}