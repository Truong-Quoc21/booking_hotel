'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(models.User, { foreignKey: 'user_id' });
      Booking.belongsTo(models.Hotel, { foreignKey: 'hotel_id' });
      Booking.hasMany(models.BookingDetail, { foreignKey: 'booking_id' });
      Booking.hasOne(models.Payment, { foreignKey: 'booking_id' });
      Booking.hasOne(models.Review, { foreignKey: 'booking_id' });
      Booking.belongsToMany(models.Voucher, { through: models.BookingVoucher, foreignKey: 'booking_id' });
    }
  }
  Booking.init({
    user_id: DataTypes.INTEGER,
    hotel_id: DataTypes.INTEGER,
    check_in_date: DataTypes.DATEONLY,
    check_out_date: DataTypes.DATEONLY,
    num_guests: DataTypes.INTEGER,
    total_amount: DataTypes.DECIMAL,
    booking_status: DataTypes.STRING,
    payment_status: DataTypes.STRING,
    special_request: DataTypes.TEXT,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Booking',
    tableName: 'bookings',
    underscored: true,
    timestamps: true
  });
  return Booking;
};