'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('disease', [
      {
       name: 'Ninguna',
       description: '',
       observations: '',
       symptom: ''
      },
      {
       name: 'Hipertensión',
       description: '',
       observations: '',
       symptom: ''
      },
      {
       name: 'Diabetes',
       description: '',
       observations: '',
       symptom: ''
      },
      {
       name: 'Cardipatías',
       description: '',
       observations: '',
       symptom: ''
      },
      {
       name: 'Enfermedades renales',
       description: '',
       observations: '',
       symptom: ''
      },
      {
       name: 'Dislipidemia',
       description: 'La dislipidemia es una condición médica que implica un desequilibrio en los niveles de lípidos en la sangre, que incluyen el colesterol y los triglicéridos; situación que puede aumentar el riesgo de desarrollar enfermedades cardiovasculares de gravedad',
       observations: "",
       symptom: ''
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('disease', null, {});
    
  }
};
