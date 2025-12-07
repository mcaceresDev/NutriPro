'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('patient', [
      {
        "id": 1,
        "name": "María Fernanda ",
        "lastname": "Martínez Ruiz",
        "gender": "F",
        "birthdate": "1997-06-05T00:00:00.000Z",
        "age": 28,
        "height": "",
        "cellphone": "57593224",
        "email": "marifer05@gmail.com",
        "reference": "Clara Ruiz",
        "referencePhone": "57828321",
        "addedBy": 1,
        "createdAt": "2025-12-06T04:27:53.607Z",
        "updatedAt": "2025-12-06T04:27:53.607Z"
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('patient', null, {});
  }
};
