'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('user', [
      {
        name: 'Manuel',
        lastname: 'Cáceres',
        username: 'manuel.caceres',
        email: 'manuel.caceres@est.soyucem.edu.ni',
        password: 'Temporal-123*',
        gender: 'M',
      },
      {
        name: 'Jairo',
        lastname: 'Blandon',
        username: 'jairo.blandon',
        email: 'jairo.blandon@est.soyucem.edu.ni',
        password: 'Temporal-123*',
        gender: 'M',
      },
      {
        name: 'Jordanesku',
        lastname: 'Blandon',
        username: 'jordanesku.blandon',
        email: 'jordanesku.blandon@est.soyucem.edu.ni',
        password: 'Temporal-123*',
        gender: 'M',
      },
      {
        name: 'Noe',
        lastname: 'Cabrera',
        username: 'noe.cabrera',
        email: 'noe.cabrera@est.soyucem.edu.ni',
        password: 'Temporal-123*',
        gender: 'M',
      },
      {
        name: 'Fernanda',
        lastname: 'Juarez',
        username: 'fernanda.juarez',
        email: 'fernanda.juarez@est.soyucem.edu.ni',
        password: 'Temporal-123*',
        gender: 'F',
      },
      {
        name: 'Alejandra',
        lastname: 'Lagos',
        username: 'alejandra.lagos',
        email: 'alejandra.lagos@est.soyucem.edu.ni',
        password: 'Temporal-123*',
        gender: 'F',
      },
      {
        name: 'Lester',
        lastname: 'Rodriguez',
        username: 'lester.rodriguez',
        email: 'lester.rodriguez@est.soyucem.edu.ni',
        password: 'Temporal-123*',
        gender: 'M',
      },
      {
        name: 'Alba',
        lastname: 'Tinoco',
        username: 'alba.tinoco',
        email: 'alba.tinoco@est.soyucem.edu.ni',
        password: 'Temporal-123*',
        gender: 'F',
      },
      {
        name: 'Ainhoa',
        lastname: 'Vargas',
        username: 'ainhoa.vargas',
        email: 'ainhoa.vargas@est.soyucem.edu.ni',
        password: 'Temporal-123*',
        gender: 'F',
      },
      {
        name: 'Giovani',
        lastname: 'Venerio',
        username: 'giovani.venerio',
        email: 'giovani.venerio@est.soyucem.edu.ni',
        password: 'Temporal-123*',
        gender: 'M',
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
