'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vouchers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING(50)
      },
      discount_type: {
        type: Sequelize.STRING(20)
      },
      discount_value: {
        type: Sequelize.DECIMAL(10, 2)
      },
      min_order_amount: {
        type: Sequelize.DECIMAL(10, 2)
      },
      max_discount_amount: {
        type: Sequelize.DECIMAL(10, 2)
      },
      start_date: {
        type: Sequelize.DATEONLY
      },
      end_date: {
        type: Sequelize.DATEONLY
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      used_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      status: {
        type: Sequelize.STRING(50)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vouchers');
  }
};