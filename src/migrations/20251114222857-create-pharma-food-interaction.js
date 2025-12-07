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
        type: Sequelize.INTEGER,
        references: {
          model: 'drug',
          key: 'id'
        }
      },
      foodId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'food',
          key: 'id'
        }
      },
      diseaseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'disease',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.STRING //'positiva', 'negativa'
      },
      effect: {
        type: Sequelize.STRING //reacciones adversas, toxicas o beneficiosas
      },
      recommend: {
        type: Sequelize.STRING
      },
      evidence: {
        type: Sequelize.STRING //('alta', 'media', 'baja') DEFAULT 'media'
      },
      reference: {
        type: Sequelize.STRING //Url o referencia bibliografica
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
    await queryInterface.dropTable('pharmaFoodInteraction');
  }
};