'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payment.belongsTo(models.Booking, { foreignKey: 'booking_id' });
    }
  }
  Payment.init({
    booking_id: DataTypes.INTEGER,
    payment_method: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    currency: DataTypes.STRING,
    transaction_code: DataTypes.STRING,
    payment_status: DataTypes.STRING,
    paid_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Payment',
    tableName: 'payments',
    underscored: true,
    timestamps: false
  });
  return Payment;
};