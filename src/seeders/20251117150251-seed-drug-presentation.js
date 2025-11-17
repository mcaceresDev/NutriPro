'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('drugPresentation', [
      {
        description: 'Tableta sublingual',
      },
      {
        description: 'Solucion inyectable',
      },
      {
        description: 'Crema',
      },
      {
        description: 'Capsula o comprimido',
      },
      {
        description: 'Tableta o cápsula de liberación prolongada',
      },
      {
        description: 'Solucion intravenosa',
      },
      {
        description: 'Supositorio',
      },
      {
        description: 'Enema',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('drugPresentation', null, {});
  }
};
