'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      booking_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'bookings', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      payment_method: {
        type: Sequelize.STRING(50)
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2)
      },
      currency: {
        type: Sequelize.STRING(10),
        defaultValue: 'VND'
      },
      transaction_code: {
        type: Sequelize.STRING(100)
      },
      payment_status: {
        type: Sequelize.STRING(50)
      },
      paid_at: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('payments');
  }
};