'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('disease', [
    {
      "id": 1,
      "name": "Ninguna",
      "description": "",
      "observations": "",
      "symptom": "",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 2,
      "name": "Hipertensión Arterial Cronica",
      "description": "La hipertensión arterial crónica (HTA) es una enfermedad persistente donde la sangre ejerce una fuerza excesiva y constante sobre las paredes de las arterias, lo que obliga al corazón a trabajar más, dañando lentamente los vasos sanguíneos y órganos. Generalmente, se diagnostica con una lectura de 130/80 mmHg o más y, aunque a menudo es asintomática, puede causar graves complicaciones como infartos, accidentes cerebrovasculares (ACV) o insuficiencia renal si no se trata. ",
      "observations": "Para el nutricionista si sospecha de hipertensión referirlo a medico general  o especialista.  ",
      "symptom": "Cefalea, visión borrosa, halos visuales, irritabilidad corporal.",
      "createdAt": null,
      "updatedAt": new Date("2025-12-18T20:03:44.575Z")
    },
    {
      "id": 3,
      "name": "Diabetes Mellitus Tipo 2",
      "description": "La diabetes tipo 2 es una enfermedad metabólica donde el cuerpo no usa bien la insulina (resistencia a la insulina) o no produce suficiente, resultando en altos niveles de azúcar (glucosa) en sangre, lo que puede dañar órganos como ojos, riñones y corazón a largo plazo. Se maneja con dieta saludable, ejercicio, control de peso, y a veces medicamentos orales o insulina, siendo prevenible con un estilo de vida activo y una alimentación balanceada",
      "observations": "En el manejo nutricional del paciente, tener en cuenta si el paciente con diabetes cursa con daño renal, o edema generalizado.   ",
      "symptom": "visión borrosa, irritabilidad corporal, debilidad generalizada, dolor de cabeza, confusión. perdida de peso, Sed Excesiva, hambre frecuente. ",
      "createdAt": null,
      "updatedAt": new Date("2025-12-18T20:15:58.011Z")
    },
    {
      "id": 4,
      "name": "Hipercolesterolemia",
      "description": "La hipercolesterolemia es tener niveles altos de colesterol en la sangre (colesterol LDL o \"malo\"), una condición que puede ser hereditaria (Hipercolesterolemia Familiar) o causada por el estilo de vida, y que aumenta el riesgo de enfermedades cardíacas y accidentes cerebrovasculares porque el exceso de colesterol forma placas en las arterias (aterosclerosis).",
      "observations": "Manejo nutricional y farmacologico",
      "symptom": ".Dolor en el pecho (Angina)\n.Fatiga y falta de aire\n-Dolor en piernas al caminar\n-Nauceas\n-vomitos\n-Adormecimiento de miembros  inferiores",
      "createdAt": null,
      "updatedAt": new Date("2025-12-18T20:55:54.768Z")
    },
    {
      "id": 5,
      "name": "Enfermedades Renal Cronica",
      "description": "La Enfermedad Renal Crónica (ERC) es el daño progresivo e irreversible de los riñones, que pierden gradualmente su capacidad de filtrar desechos y exceso de líquidos, causando su acumulación y afectando la salud general, siendo la diabetes y la hipertensión las causas principales, y requiriendo control de síntomas y progresión, a menudo sin cura, con tratamiento enfocado en retrasar el avance y gestionar complicaciones como la necesidad de diálisis o trasplante en etapas avanzadas",
      "observations": "Paciente debe ser valorado por especialista nefrologo y valorado por nutricionista capacitado.  ",
      "symptom": "Fatiga y debilidad, Hinchazón (Edema), Dificultad para respirar, Cambios al orinar. cansancio corporal, ",
      "createdAt": null,
      "updatedAt": new Date("2025-12-18T20:51:23.276Z")
    },
    {
      "id": 6,
      "name": "Dislipidemia",
      "description": "La dislipidemia es una condición médica que implica un desequilibrio en los niveles de lípidos en la sangre, que incluyen el colesterol y los triglicéridos; situación que puede aumentar el riesgo de desarrollar enfermedades cardiovasculares de gravedad",
      "observations": "",
      "symptom": ".Dolor en el pecho (Angina)\n.Fatiga y falta de aire\n-Dolor en piernas al caminar\n-Nauceas\n-vomitos\n-Adormecimiento de miembros  inferiores",
      "createdAt": null,
      "updatedAt": new Date("2025-12-18T20:57:01.515Z")
    },
    {
      "id": 7,
      "name": "Hipertrigliceridemia",
      "description": "La hipertrigliceridemia es una condición médica donde los niveles de triglicéridos (grasas) en la sangre están elevados por encima de 150 mg/dL, aumentando el riesgo de enfermedades cardiovasculares y pancreatitis, y se maneja con dieta baja en azúcares y alcohol, ejercicio, pérdida de peso y, a veces, medicamentos, siendo causada por factores dietéticos, genéticos o enfermedades subyacentes como diabetes o hipotiroidismo",
      "observations": "",
      "symptom": "cefalea, nauseas, vomitos, visión borrosa, dolor piernas. adormecimiento corporal.  ",
      "createdAt": new Date("2025-12-18T20:59:47.665Z"),
      "updatedAt": new Date("2025-12-18T20:59:47.665Z")
    }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('disease', null, {});
    
  }
};

