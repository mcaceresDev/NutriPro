'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('drug', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      generic: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      dosage: {
        type: Sequelize.STRING
      },
      pharmaGroupId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pharmagroup',
          key: 'id'
        }
      },
      presentationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drugPresentation',
          key: 'id'
        }
      },
      addedBy: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      createdAt: {
        // allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        // allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('drug');
  }
};