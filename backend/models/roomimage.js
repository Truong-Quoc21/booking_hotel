'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RoomImage.belongsTo(models.Room, { foreignKey: 'room_id' });
    }
  }
  RoomImage.init({
    room_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RoomImage',
    tableName: 'roomImages',
    underscored: true,
    timestamps: false
  });
  return RoomImage;
};