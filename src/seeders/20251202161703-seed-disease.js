'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('disease', [
      {
       name: 'Hipertensión',
       description: '',
       symptom: ''
      },
      {
       name: 'Diabetes',
       description: '',
       symptom: ''
      },
      {
       name: 'Cardipatías',
       description: '',
       symptom: ''
      },
      {
       name: 'Enfermedades renales',
       description: '',
       symptom: ''
      },
      {
       name: 'Dislipidemia',
       description: 'La dislipidemia es una condición médica que implica un desequilibrio en los niveles de lípidos en la sangre, que incluyen el colesterol y los triglicéridos; situación que puede aumentar el riesgo de desarrollar enfermedades cardiovasculares de gravedad',
       symptom: ''
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('disease', null, {});
    
  }
};
