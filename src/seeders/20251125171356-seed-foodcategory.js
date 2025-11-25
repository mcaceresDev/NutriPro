'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('foodcategory', [
      {
        name: 'PRODUCTOS LÁCTEOS Y SIMILARES'
      },
      {
        name: 'HUEVOS'
      },
      {
        name: 'CARNE DE AVES'
      },
      {
        name: 'CARNE DE CERDO'
      },
      {
        name: 'CARNE DE VACUNO'
      },
      {
        name: 'CARNE DE ANIMALES DE CAZA'
      },
      {
        name: 'EMBUTIDOS Y SIMILARES'
      },
      {
        name: 'MARISCOS Y PESCADOS'
      },
      {
        name: 'LEGUMINOSAS, GRANOS SECOS Y DERIVADOS'
      },
      {
        name: 'NUECES Y SEMILLAS'
      },
      {
        name: 'VERDURAS, HORTALIZAS Y OTROS VEGETALES'
      },
      {
        name: 'FRUTAS Y JUGOS DE FRUTAS'
      },
      {
        name: 'CEREALES GRANOS SECOS, HARINAS, PASTAS, CEREALES DE DESAYUNO Y OTRAS HARINAS'
      },
      {
        name: 'GALLETAS, PANES, TORTILLAS Y SIMILARES'
      },
      {
        name: 'AZÚCARES, MIELES, DULCES Y GOLOSINAS'
      },
      {
        name: 'ACEITES Y GRASAS'
      },
      {
        name: 'BEBIDAS DIVERSAS'
      },
      {
        name: 'POSTRES ELABORADOS'
      },
      {
        name: 'COMIDAS INFANTILES'
      },
      {
        name: 'ADEREZOS, SALSAS Y SOPAS'
      },
      {
        name: 'COMIDAS PREPARADAS: COMERCIALES Y CASERAS'
      },
      {
        name: 'CONDIMENTOS'
      }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('foodcategory', null, {});
    
  }
};
