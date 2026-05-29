'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RoomType.hasMany(models.Room, { foreignKey: 'room_type_id' });
    }
  }
  RoomType.init({
    type_name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'RoomType',
    tableName: 'roomTypes',
    underscored: true, 
    timestamps: false   
  });
  return RoomType;
};