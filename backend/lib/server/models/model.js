'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var Model = sequelize.define('Model', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function associate(models) {
        Model.belongsTo(models.Service, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
        Model.hasMany(models.Attribute);
      }
    }
  });

  return Model;
};