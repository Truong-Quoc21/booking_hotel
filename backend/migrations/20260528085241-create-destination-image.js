'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('destinationImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destination_id: {
        type: Sequelize.INTEGER
      },
      image_url: {
        type: Sequelize.STRING(255)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('destinationImages');
  }
};