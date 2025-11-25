'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('food', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      aqua: {
        type: Sequelize.DECIMAL
      },
      energy: {
        type: Sequelize.INTEGER
      },
      protein: {
        type: Sequelize.DECIMAL
      },
      totalFat: {
        type: Sequelize.DECIMAL
      },
      carbs: {
        type: Sequelize.DECIMAL
      },
      dietaryFiber: {
        type: Sequelize.DECIMAL
      },
      ceniza: {
        type: Sequelize.DECIMAL
      },
      calcium: {
        type: Sequelize.DECIMAL
      },
      phosphorus: {
        type: Sequelize.DECIMAL
      },
      iron: {
        type: Sequelize.DECIMAL
      },
      thiamine: {
        type: Sequelize.DECIMAL
      },
      riboflavin: {
        type: Sequelize.DECIMAL
      },
      niacin: {
        type: Sequelize.DECIMAL
      },
      vitC: {
        type: Sequelize.INTEGER
      },
      vitA: {
        type: Sequelize.INTEGER
      },
      monoiFatAcid: {
        type: Sequelize.DECIMAL
      },
      poliiFatAcid: {
        type: Sequelize.DECIMAL
      },
      satFatAcid: {
        type: Sequelize.DECIMAL
      },
      cholesterol: {
        type: Sequelize.INTEGER
      },
      potassium: {
        type: Sequelize.INTEGER
      },
      sodium: {
        type: Sequelize.INTEGER
      },
      zinc: {
        type: Sequelize.DECIMAL
      },
      magnesium: {
        type: Sequelize.INTEGER
      },
      vitB6: {
        type: Sequelize.DECIMAL
      },
      vitB12: {
        type: Sequelize.DECIMAL
      },
      folicAcid: {
        type: Sequelize.INTEGER
      },
      folato: {
        type: Sequelize.INTEGER
      },
      edibleFraction: {
        type: Sequelize.DECIMAL
      },
      addedBy: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'foodcategory',
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
    await queryInterface.dropTable('food');
  }
};