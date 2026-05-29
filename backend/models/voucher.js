'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Voucher.belongsToMany(models.Booking, { through: models.BookingVoucher, foreignKey: 'voucher_id' });
    }
  }
  Voucher.init({
    code: DataTypes.STRING,
    discount_type: DataTypes.STRING,
    discount_value: DataTypes.DECIMAL,
    min_order_amount: DataTypes.DECIMAL,
    max_discount_amount: DataTypes.DECIMAL,
    start_date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    quantity: DataTypes.INTEGER,
    used_count: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Voucher',
    tableName: 'vouchers',
    underscored: true,
    timestamps: false
  });
  return Voucher;
};