'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('user',
      [
        {
          "name": "Manuel",
          "lastname": "Cáceres",
          "username": "manuel.caceres",
          "email": "manuel.caceres@est.soyucem.edu.ni",
          "password": "$2b$10$dq.15qctLEOn.rIZBOCrs.9J88Yg3qvk5/.CsGw5Z3T6..9DCA2OW",
          "gender": "M",
          "role": "superadmin",
          "createdAt": null,
          "updatedAt": "2025-11-28T06:23:20.691Z",
          "deletedAt": null
        },
        {
          "name": "Jairo",
          "lastname": "Blandon",
          "username": "jairo.blandon",
          "email": "jairo.blandon@est.soyucem.edu.ni",
          "password": "$2b$10$EAsychAPXmkg7SEzMCLIeuqr1k1jSna3CXqAg2UxkkI95RKcYaa72",
          "gender": "M",
          "role": "special",
          "createdAt": null,
          "updatedAt": null,
          "deletedAt": null
        },
        {
          "name": "Jordanesku",
          "lastname": "Blandon",
          "username": "jordanesku.blandon",
          "email": "jordanesku.blandon@est.soyucem.edu.ni",
          "password": "$2b$10$EAsychAPXmkg7SEzMCLIeuqr1k1jSna3CXqAg2UxkkI95RKcYaa72",
          "gender": "M",
          "role": "comun",
          "createdAt": null,
          "updatedAt": null,
          "deletedAt": null
        },
        {
          "name": "Noe",
          "lastname": "Cabrera",
          "username": "noe.cabrera",
          "email": "noe.cabrera@est.soyucem.edu.ni",
          "password": "$2b$10$EAsychAPXmkg7SEzMCLIeuqr1k1jSna3CXqAg2UxkkI95RKcYaa72",
          "gender": "M",
          "role": "comun",
          "createdAt": null,
          "updatedAt": null,
          "deletedAt": null
        },
        {
          "name": "Fernanda",
          "lastname": "Juarez",
          "username": "fernanda.juarez",
          "email": "fernanda.juarez@est.soyucem.edu.ni",
          "password": "$2b$10$/U/WSC1E10r5dDmVFvZkaOsRRtAbPvob46o.4yG/CU/Og2RzEcbqy",
          "gender": "F",
          "role": "admin",
          "createdAt": null,
          "updatedAt": "2025-11-30T15:28:21.609Z",
          "deletedAt": null
        },
        {
          "name": "Alejandra",
          "lastname": "Lagos",
          "username": "alejandra.lagos",
          "email": "alejandra.lagos@est.soyucem.edu.ni",
          "password": "$2b$10$gFhd.hYHCc4zzbe0JKnYpOyrQfAP6aiWJ3HRJbp1iytAG3fllWQBK",
          "gender": "F",
          "role": "admin",
          "createdAt": null,
          "updatedAt": "2025-11-30T15:35:35.449Z",
          "deletedAt": null
        },
        {
          "name": "Lester",
          "lastname": "Rodriguez",
          "username": "lester.rodriguez",
          "email": "lester.rodriguez@est.soyucem.edu.ni",
          "password": "$2b$10$EAsychAPXmkg7SEzMCLIeuqr1k1jSna3CXqAg2UxkkI95RKcYaa72",
          "gender": "M",
          "role": "comun",
          "createdAt": null,
          "updatedAt": null,
          "deletedAt": null
        },
        {
          "name": "Alba",
          "lastname": "Tinoco",
          "username": "alba.tinoco",
          "email": "alba.tinoco@est.soyucem.edu.ni",
          "password": "$2b$10$katGHeyInvBz.pP5hODFwe.sgI1ulOyXABYH0ynkhabyXtJDwtmIy",
          "gender": "F",
          "role": "admin",
          "createdAt": null,
          "updatedAt": "2025-12-01T21:29:16.407Z",
          "deletedAt": null
        },
        {
          "name": "Ainhoa",
          "lastname": "Vargas",
          "username": "ainhoa.vargas",
          "email": "ainhoa.vargas@est.soyucem.edu.ni",
          "password": "$2b$10$EAsychAPXmkg7SEzMCLIeuqr1k1jSna3CXqAg2UxkkI95RKcYaa72",
          "gender": "F",
          "role": "admin",
          "createdAt": null,
          "updatedAt": null,
          "deletedAt": null
        },
        {
          "name": "Giovani",
          "lastname": "Venerio",
          "username": "giovani.venerio",
          "email": "giovani.venerio@est.soyucem.edu.ni",
          "password": "$2b$10$YtHAiH6IqGrSDYpMXqWOienkTYkJRhzj45jH0it5EI.oescHanw4O",
          "gender": "M",
          "role": "comun",
          "createdAt": null,
          "updatedAt": "2025-12-01T05:41:07.548Z",
          "deletedAt": null
        }
      ]

      , {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
