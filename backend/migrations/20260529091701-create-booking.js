'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      hotel_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'hotels', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      check_in_date: {
        type: Sequelize.DATEONLY
      },
      check_out_date: {
        type: Sequelize.DATEONLY
      },
      num_guests: {
        type: Sequelize.INTEGER
      },
      total_amount: {
        type: Sequelize.DECIMAL(10, 2)
      },
      booking_status: {
        type: Sequelize.STRING(50)
      },
      payment_status: {
        type: Sequelize.STRING(50)
      },
      special_request: {
        type: Sequelize.TEXT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bookings');
  }
};