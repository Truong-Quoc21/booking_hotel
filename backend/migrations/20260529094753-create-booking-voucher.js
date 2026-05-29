'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookingVouchers', {
      booking_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'bookings', key: 'id' },
        onDelete: 'CASCADE'
      },
      voucher_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'vouchers', key: 'id' },
        onDelete: 'CASCADE'
      },
      discount_amount: {
        type: Sequelize.DECIMAL(10, 2)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bookingVouchers');
  }
};