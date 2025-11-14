'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pharmaFoodInteraction', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      drugId: {
        type: Sequelize.INTEGER
      },
      foodId: {
        type: Sequelize.INTEGER
      },
      diseaseId: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      effect: {
        type: Sequelize.STRING
      },
      recommend: {
        type: Sequelize.STRING
      },
      evidence: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pharmaFoodInteraction');
  }
};