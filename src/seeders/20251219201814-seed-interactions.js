'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pharmaFoodInteraction',
      [
    {
      "id": 1,
      "drugId": 10,
      "foodId": 435,
      "diseaseId": 2,
      "type": "negativa",
      "effect": "El captopril puede aumentar los niveles de potasio en el organismo y si se combina con una ingesta elevada con este mineral, puede llevar a una hiperpotasemia",
      "recommend": "se recomienda limitar o evitar el potasio en la dieta cuando el paciente está siendo manejado con  captopril ya que este puede aumentar en niveles sericos",
      "evidence": "baja",
      "reference": "https://www.soyvida.com/hipertension/Alimentos-que-se-deben-evitar-si-toma-captopril-para-la-presion-20230620-0004.html",
      "createdAt": new Date("2025-12-10T03:12:45.586Z"),
      "updatedAt": new Date("2025-12-18T19:39:59.584Z")
    },
    {
      "id": 2,
      "drugId": 10,
      "foodId": 228,
      "diseaseId": 2,
      "type": "negativa",
      "effect": "El captopril puede aumentar los niveles de potasio en el organismo y si se combina con una ingesta elevada con este mineral, puede llevar a una hiperpotasemia",
      "recommend": "se recomienda limitar o evitar el potasio en la dieta cuando el paciente está siendo manejado con  captopril ya que este puede aumentar en niveles sericos",
      "evidence": "Seleccione nivel de respaldo",
      "reference": "https://www.soyvida.com/hipertension/Alimentos-que-se-deben-evitar-si-toma-captopril-para-la-presion-20230620-0004.html",
      "createdAt": new Date("2025-12-10T03:19:59.510Z"),
      "updatedAt": new Date("2025-12-10T03:19:59.510Z")
    },
    {
      "id": 3,
      "drugId": 10,
      "foodId": 548,
      "diseaseId": 2,
      "type": "negativa",
      "effect": "El captopril puede aumentar los niveles de potasio en el organismo y si se combina con una ingesta elevada con este mineral, puede llevar a una hiperpotasemia",
      "recommend": "se recomienda limitar o evitar el potasio en la dieta cuando el paciente está siendo manejado con  captopril ya que este puede aumentar en niveles sericos",
      "evidence": "media",
      "reference": "https://www.soyvida.com/hipertension/Alimentos-que-se-deben-evitar-si-toma-captopril-para-la-presion-20230620-0004.html",
      "createdAt": new Date("2025-12-10T03:21:31.794Z"),
      "updatedAt": new Date("2025-12-10T03:21:31.794Z")
    },
    {
      "id": 4,
      "drugId": 1,
      "foodId": 176,
      "diseaseId": 4,
      "type": "negativa",
      "effect": "aumenta el colesterol LDL y triglicéridos, incrementa la presión arterial, mayor riesgo cardiovascular",
      "recommend": "evitar alimentos ultraprocesados, preferir proteinas y grasas saludables, aumentar consumo de fibra, reducir sodio y frituras",
      "evidence": "baja",
      "reference": "https://www.google.com/search?q=atorvastatina+relacionado+con+hipercolesterolemia&oq=&gs_lcrp=EgZjaHJvbWUqDAgCECMYJxjqAhiMBDIMCAAQIxgnGOoCGIwEMgwIARAjGCcY6gIYjAQyDAgCECMYJxjqAhiMBDIMCAMQIxgnGOoCGIwEMgwIBBAjGCcY6gIYjAQyDAgFECMYJxjqAhiMBDIGCAYQRRhA0gEKMTUzMzgyajBqOagCBrACAfEF1ihERpCre-A&sourceid=chrome&ie=UTF-8",
      "createdAt": new Date("2025-12-10T06:30:44.006Z"),
      "updatedAt": new Date("2025-12-19T07:10:04.844Z")
    },
    {
      "id": 5,
      "drugId": 9,
      "foodId": 28,
      "diseaseId": 2,
      "type": "negativa",
      "effect": "acumulación de potasio que puede causar problemas cardíacos",
      "recommend": " Evitar grandes cantidades de plátanos, naranjas, patatas, aguacates, frutos secos, espinacas y tomate, ya que el enalapril puede aumentar los niveles de potasio en sangre.",
      "evidence": "media",
      "reference": "https://www.google.com/search?q=enalapril+e+interaccion+con+alimentos+nicaragua&client=",
      "createdAt": new Date("2025-12-13T22:12:12.934Z"),
      "updatedAt": new Date("2025-12-18T19:42:01.244Z")
    },
    {
      "id": 6,
      "drugId": 1,
      "foodId": 842,
      "diseaseId": 6,
      "type": "negativa",
      "effect": "Evitar grandes cantidades, ya que eleva los niveles de atorvastatina en sangre, aumentando el riesgo de daño muscular (rabdomiólisis) o hepático.",
      "recommend": "Restringir o limitar cuando se este usando atorvastatina, ",
      "evidence": "Seleccione nivel de respaldo",
      "reference": "https://www.google.com/search?q=ATORVASTATINA+INTERACCION+CON+ALIMENTOS&client",
      "createdAt": new Date("2025-12-16T21:39:45.965Z"),
      "updatedAt": new Date("2025-12-16T21:39:45.965Z")
    },
    {
      "id": 7,
      "drugId": 4,
      "foodId": 606,
      "diseaseId": 3,
      "type": "negativa",
      "effect": "Los alimentos y bebidas con alto contenido de azúcar, como los refrescos, los dulces y los productos horneados, aumentan los niveles de azúcar en sangre y pueden contrarrestar la eficacia de la metformina . 4  Centros para el Control y la Prevención de Enfermedades. Cómo elegir carbohidratos saludables . Los azúcares agregados (edulcorantes añadidos durante el procesamiento de los alimentos) pueden ser especialmente problemáticos.",
      "recommend": "Los alimentos y bebidas con alto contenido de azúcar, como los refrescos, los dulces y los productos horneados, aumentan los niveles de azúcar en sangre y pueden contrarrestar la eficacia de la metformina . 4  Centros para el Control y la Prevención de Enfermedades. Cómo elegir carbohidratos saludables . Los azúcares agregados (edulcorantes añadidos durante el procesamiento de los alimentos) pueden ser especialmente problemáticos.",
      "evidence": "baja",
      "reference": "https://www-verywellhealth-com.translate.goog/foods-to-avoid-while-taking-metformin",
      "createdAt": new Date("2025-12-16T22:02:34.259Z"),
      "updatedAt": new Date("2025-12-16T22:02:34.259Z")
    },
    {
      "id": 8,
      "drugId": 9,
      "foodId": 848,
      "diseaseId": 2,
      "type": "negativa",
      "effect": "El enalapril interactúa con nutrientes clave, principalmente el potasio, aumentando sus niveles en sangre, por lo que se debe evitar suplementos de potasio, sustitutos de sal y alimentos muy ricos en K (plátano, espinacas, frutos secos). También puede interactuar con alimentos grasos (aumentan niveles), Aguacate, Naranja y alcohol (potencia efecto). Además, podría reducir niveles de zinc a largo plazo",
      "recommend": "limitar la ingesta de estos alimentos en caso que sea necesario",
      "evidence": "baja",
      "reference": "",
      "createdAt": new Date("2025-12-18T19:48:04.627Z"),
      "updatedAt": new Date("2025-12-18T19:48:04.627Z")
    },
    {
      "id": 9,
      "drugId": 9,
      "foodId": 322,
      "diseaseId": 2,
      "type": "negativa",
      "effect": "El enalapril interactúa con nutrientes clave, principalmente el potasio, aumentando sus niveles en sangre, por lo que se debe evitar suplementos de potasio, sustitutos de sal y alimentos muy ricos en K (plátano, espinacas, frutos secos). También puede interactuar con alimentos grasos (aumentan niveles), Aguacate, Naranja y alcohol (potencia efecto). Además, podría reducir niveles de zinc a largo plazo.",
      "recommend": "Limitar la ingesta de estos alimentos en caso que sea necesario, y valorando estos minerales en sangre por  laboratorio.  ",
      "evidence": "media",
      "reference": "",
      "createdAt": new Date("2025-12-18T19:51:24.598Z"),
      "updatedAt": new Date("2025-12-18T19:51:24.598Z")
    },
    {
      "id": 10,
      "drugId": 1,
      "foodId": 322,
      "diseaseId": 4,
      "type": "positiva",
      "effect": "es rico en grasas monoinsaturadas, que ayudan a disminuir el colesterol LDL",
      "recommend": "Se recomienda consumo regular de aguacate (¼–½ unidad, 4–5 veces/semana) como intervención nutricional coadyuvante para el control de hipercolesterolemia, en conjunto con tratamiento farmacológico con atorvastatina.",
      "evidence": "alta",
      "reference": "https://www.google.com/search?q=atorvastatina+relacionado+con+hipercolesterolemia&oq=&gs_lcrp=EgZjaHJvbWUqDAgCECMYJxjqAhiMBDIMCAAQIxgnGOoCGIwEMgwIARAjGCcY6gIYjAQyDAgCECMYJxjqAhiMBDIMCAMQIxgnGOoCGIwEMgwIBBAjGCcY6gIYjAQyDAgFECMYJxjqAhiMBDIGCAYQRRhA0gEKMTUzMzgyajBqOagCBrACAfEF1ihERpCre-A&sourceid=chrome&ie=UTF-8",
      "createdAt": new Date("2025-12-19T07:17:48.116Z"),
      "updatedAt": new Date("2025-12-19T07:17:48.116Z")
    }
  ]
      , {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pharmaFoodInteraction', null, {});
  }
};
