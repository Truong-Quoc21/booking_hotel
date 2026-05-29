'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingVoucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookingVoucher.belongsTo(models.Booking, { foreignKey: 'booking_id' });
      BookingVoucher.belongsTo(models.Voucher, { foreignKey: 'voucher_id' });
    }
  }
  BookingVoucher.init({
    booking_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    voucher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    discount_amount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'BookingVoucher',
    tableName: 'bookingVouchers',
    underscored: true,
    timestamps: false
  });
  return BookingVoucher;
};