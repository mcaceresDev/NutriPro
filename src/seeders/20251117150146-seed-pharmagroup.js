'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('pharmagroup', [
      {
        name: 'Antihipertensivos',
        description: ''
      },
      {
        name: 'Analgesicos',
        description: ''
      },
      {
        name: 'Ansioliticos',
        description: ''
      },
      {
        name: 'Antiemeticos',
        description: ''
      },
      {
        name: 'Anticonvulsivantes',
        description: ''
      },
      {
        name: 'Antibioticos',
        description: ''
      },
      {
        name: 'Antihistaminicos',
        description: ''
      },
      {
        name: 'Corticoides',
        description: ''
      },
      {
        name: 'Diuréticos',
        description: ''
      },
      {
        name: 'Hipoglucemiantes',
        description: ''
      },
      {
        name: 'Anticoagulante',
        description: ''
      },
      {
        name: 'Estatinas',
        description: ''
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pharmagroup', null, {});
  }
};
