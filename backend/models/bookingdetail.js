'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookingDetail.belongsTo(models.Booking, { foreignKey: 'booking_id' });
      BookingDetail.belongsTo(models.Room, { foreignKey: 'room_id' });
    }
  }
  BookingDetail.init({
    booking_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'BookingDetail',
    tableName: 'bookingDetails',
    underscored: true,
    timestamps: false
  });
  return BookingDetail;
};