'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('drug',
      [
        {
          "id": 1,
          "name": "NOR-VASTINA",
          "generic": "SIMVASTATINA",
          "description": "Fármaco utilizado para disminuir los niveles de colesterol malo LDL y triglicéridos en la sangre, así como para aumentar el colesterol bueno HDL, se usa en combinación con una dieta saludable y ejercicio ara disminuir los factores de riesgo de enfermedades cardiovasculares. El β-hidroxiácido de simvastatina es un inhibidor de la 3-hidroxi-3-metilglutaril-coenzima A (HMG-CoA) reductasa. Esta enzima cataliza la conversión de la HMG-CoA a mevalonato, que es un metabolito clave en la biosíntesis de colesterol",
          "dosage": "20 y 40 mg, diario, una vez al día ",
          "treatmentPeriod": "1 - 3 meses dependiendo los resultados del colesterol total y LDL asignado este último como colesterol malo",
          "pharmaGroupId": 12,
          "presentationId": 5,
          "addedBy": 2,
          "createdAt": "2025-12-06T04:46:28.900Z",
          "updatedAt": "2025-12-06T05:32:07.111Z"
        },
        {
          "id": 2,
          "name": "LIPITOR",
          "generic": "ATORVASTATINA CALCICA",
          "description": "Es un fármaco o medicamento de la familia de las Estatinas que se utiliza para reducir los niveles elevados de colesterol y triglicéridos en sangre. Ayuda a disminuir los factores de riesgo para enfermedades cardiovasculares, La atorvastatina actúa como un inhibidor competitivo de la (3-hidroxi-3-metil-glutaril-CoA reductasa) HMG-CoA reductasa, reduciendo la producción de colesterol en el hígado y mejorando la eliminación del colesterol LDL de la sangre. La atorvastatina actúa como un inhibidor competitivo de la HMG-CoA reductasa, reduciendo la producción de colesterol en el hígado y mejorando la eliminación del colesterol LDL de la sangre.",
          "dosage": "40 o 60 mg diarios, una vez al día",
          "treatmentPeriod": "1 - 3 meses dependiendo los resultados del colesterol total y LDL asignado este último como colesterol malo",
          "pharmaGroupId": 12,
          "presentationId": 5,
          "addedBy": 2,
          "createdAt": "2025-12-06T05:13:59.412Z",
          "updatedAt": "2025-12-06T05:25:08.148Z"
        },
        {
          "id": 3,
          "name": "RUXICOL 10 MG O ROVARTAL",
          "generic": "ROSUVASTATINA",
          "description": "La Rosuvastatina pertenece a la familia de las Estatinas, se recomienda para reducir los niveles sanguíneos de colesterol total, colesterol malo (LDL) y triglicéridos, además de aumentar el colesterol bueno (HDL). La rosuvastatina es un inhibidor de la 3-hidroxi-3-metilglutaril-coenzima A reductasa (HMG-CoA reductasa). Esta enzima cataliza un paso esencial de la vía del mevalonato, la conversión de la HMG-CoA a mevalonato, que es un metabolito clave en la biosíntesis de colesterol. ",
          "dosage": "10 Ó 20 mg, diario una vez al día ",
          "treatmentPeriod": "1 - 3 meses dependiendo los resultados del colesterol total y LDL asignado este último como colesterol malo",
          "pharmaGroupId": 12,
          "presentationId": 5,
          "addedBy": 2,
          "createdAt": "2025-12-06T05:51:04.958Z",
          "updatedAt": "2025-12-06T05:51:04.958Z"
        },
        {
          "id": 4,
          "name": "GLYMEFOR / METFORMINA DENK",
          "generic": "CLORHIDRATO DE METFORMINA",
          "description": "Es un fármaco antidiabético de aplicación oral del tipo biguanida. Se utiliza comúnmente en el tratamiento y la prevención de la diabetes mellitus tipo 2, Se indica por sí sola como adyuvante del ejercicio físico y la dieta en pacientes cuya hiperglucemia no puede ser controlada sólo con modificaciones en la dieta, es tan efectiva reduciendo los niveles elevados de glucosa en sangre. La metformina es un antihiperglicemiante que disminuye los niveles de glucemia basal y postprandial. Este efecto se logra principalmente mediante el control del exceso de producción hepática de glucosa al reducir la gluconeogénesis. Además, aumentó la captación celular de glucosa, aumenta la transducción de señales de la insulina, disminuye la síntesis de ácidos grasos y triglicéridos y aumenta la beta oxidación de ácidos grasos.",
          "dosage": "500 MG, 850 MG, 1000 MG, puede ser una ser una ves, dos veces, tres veces al día, dependiendo del estado de nivel de glucosa en sangre y estado de compensación del paciente",
          "treatmentPeriod": "Una, dos o tres veces al día y puede ser permanente o arcial dependiendo si el paciente la tolera",
          "pharmaGroupId": 10,
          "presentationId": 5,
          "addedBy": 2,
          "createdAt": "2025-12-06T15:34:46.924Z",
          "updatedAt": "2025-12-06T15:34:46.924Z"
        },
        {
          "id": 5,
          "name": "GLIDIABET/ GLIBENCLAMIDA",
          "generic": "GLIBURIDA",
          "description": "La Glibenclamida, conocida además como gliburida, es un medicamento hipoglucemiante oral de la clase de las sulfonilureas, se utiliza en el tratamiento de la diabetes mellitus tipo 2. Su mecanismo de acción de La glibenclamida bloquea los canales de potasio dependientes de ATP que hay en las membranas de las células pancreáticas beta, provocando despolarización, entrada de calcio y liberación de insulina. La glibenclamida, además, disminuye la glucogenólisis hepática y la gluconeogénesis, Farmacocinética: la glibenclamida se absorbe rápidamente después de su administración por vía oral. La biodisponibilidad de la glibenclamida es de aproximadamente 70%, a partir de las tabletas. Las concentraciones séricas máximas se alcanzan después de 2 a 4 horas. La absorción de la glibenclamida no se altera significativamente por la toma de alimentos. La vida media sérica de la glibenclamida es de aproximadamente 2 horas después de la administración por vía intravenosa, y de 2 a 5 horas después de la administración por vía oral",
          "dosage": "2.5 a 5 mg una vez al día, según niveles de glucosa en sangre y estado de compensación del paciente.",
          "treatmentPeriod": "El tiempo de tratamiento va depender de la tolerancia del paciente ante este.",
          "pharmaGroupId": 10,
          "presentationId": 5,
          "addedBy": 2,
          "createdAt": "2025-12-06T16:27:29.549Z",
          "updatedAt": "2025-12-06T16:27:29.549Z"
        },
        {
          "id": 6,
          "name": "GEMFIBROZILO/ GEMFIVARD 600",
          "generic": "GEMFIBROZIL",
          "description": "El Gemfibrozilo es una sustancia derivada del ácido fíbrico, que se utiliza para disminuir los niveles de triglicéridos (TG) en sangre. Al igual que otros fibratos activa el factor de transcripción PPAR-α. Esto promueve la oxidación de ácidos grasos y estimula la actividad LPL, lo que reduce los TG, y aumenta la síntesis de apoproteínas de las HDL, lo que incrementa las cifras de colesterol HDL (cHDL). En promedio, los fibratos reducen los TG un 36% y aumentan el cHDL un 8%. Se absorbe rápida y completamente en el tracto gastrointestinal, produciéndose una reducción en presencia de alimento. Su unión a proteínas plasmáticas es de aproximadamente de 95%. La eliminación del Gemfibrozilo es rápida y se realiza por vía renal en un 95% y una pequeña parte por las heces. La vida media es de hora y media.",
          "dosage": "600 mg, ",
          "treatmentPeriod": "1 a 3 meses dependiendo de los niveles de triglicéridos en sangre, de etologías crónicas en especial las cardiovasculares",
          "pharmaGroupId": 13,
          "presentationId": 5,
          "addedBy": 2,
          "createdAt": "2025-12-06T16:45:08.080Z",
          "updatedAt": "2025-12-06T16:45:08.080Z"
        },
        {
          "id": 7,
          "name": "LIPIDIL, CONTROLIP, SECALIP ",
          "generic": "FENOFIBRATO ACIDO FIBRICO",
          "description": "El Fenofibrato es una sustancia derivada del ácido fíbrico, que al metabolizarse en el organismo origina el ácido fenofíbrico, su metabolito activo. Se utiliza para disminuir los niveles de triglicéridos (TG) en sangre. Al igual que otros fibratos activa el factor de transcripción PPAR-α. Esto promueve la oxidación de ácidos grasos y estimula la actividad LPL, lo que reduce los TG, y aumenta la síntesis de apoproteínas de las HDL, lo que incrementa las cifras de Colesterol HDL (cHDL). En promedio, los fibratos reducen los TG un 36% y aumentan el cHDL un 8%. La concentración plasmática máxima (Cmax) se alcanza entre las 2 y 4 horas después de la administración oral. Presenta interferencias en la absorción si se toma junto a comida, fenómeno éste que mejora en determinadas presentaciones galénicas (nanopartículas). Distribución: El ácido fenofíbrico está fuertemente asociado a la albúmina plasmática (más del 99%). Metabolismo y excreción: Después de la administración oral, el Fenofibrato es rápidamente hidrolizado por las esterasas en su metabolito activo, el ácido fenofíbrico",
          "dosage": "160 a 250 mg por día hasta 3 meses",
          "treatmentPeriod": "1 a 3 meses dependiendo de los niveles de triglicéridos en sangre, de etologías crónicas en especial las cardiovasculares",
          "pharmaGroupId": 13,
          "presentationId": 5,
          "addedBy": 2,
          "createdAt": "2025-12-07T05:18:47.241Z",
          "updatedAt": "2025-12-07T05:18:47.241Z"
        },
        {
          "id": 8,
          "name": "FIBROLIP, ",
          "generic": "CIPROFIBRATO UN DERIVADO DEL ACIDO FIBRICO",
          "description": "Mecanismo de acción. El Ciprofibrato ejerce su efecto mediante la activación de los receptores que aumentan la proliferación de los peroxisomas α (PPAR α, por sus siglas en inglés), estos inducen la trascripción de genes que codifican varias proteínas esenciales para el control y la modulación de las lipoproteínas propias del metabolismo de los lípidos. De esta manera llevan a un aumento de la producción de la lipasa lipoprotéica (LPL), y a la inhibición de la expresión de la APO CIII, lo cual se traduce en una mayor eficiencia para metabolizar los lípidos de la circulación y retirar colesterol del plasma.",
          "dosage": "100 MG DIARIO",
          "treatmentPeriod": "1 a 3 meses dependiendo de los niveles de triglicéridos en sangre, de etologías crónicas en especial las cardiovasculares",
          "pharmaGroupId": 13,
          "presentationId": 5,
          "addedBy": 2,
          "createdAt": "2025-12-07T05:33:57.811Z",
          "updatedAt": "2025-12-07T05:33:57.811Z"
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('drug', null, {});
  }
};
