'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.belongsTo(models.Hotel, { foreignKey: 'hotel_id' });
      Room.belongsTo(models.RoomType, { foreignKey: 'room_type_id' });
      Room.hasMany(models.RoomImage, { foreignKey: 'room_id' });
      Room.hasMany(models.BookingDetail, { foreignKey: 'room_id' });
    }
  }
  Room.init({
    hotel_id: DataTypes.INTEGER,
    room_type_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    capacity: DataTypes.INTEGER,
    total_rooms: DataTypes.INTEGER,
    bed_count: DataTypes.INTEGER,
    area: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Room',
    tableName: 'rooms',
    underscored: true,     
    paranoid: false,
    timestamps: true
  });
  return Room;
};