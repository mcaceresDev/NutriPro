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
          "createdAt": new Date("2025-12-06T04:46:28.900Z"),
          "updatedAt": new Date("2025-12-06T05:32:07.111Z")
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
          "createdAt": new Date("2025-12-06T05:13:59.412Z"),
          "updatedAt": new Date("2025-12-06T05:25:08.148Z")
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
          "createdAt": new Date("2025-12-06T05:51:04.958Z"),
          "updatedAt": new Date("2025-12-06T05:51:04.958Z")
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
          "createdAt": new Date("2025-12-06T15:34:46.924Z"),
          "updatedAt": new Date("2025-12-06T15:34:46.924Z")
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
          "createdAt": new Date("2025-12-06T16:27:29.549Z"),
          "updatedAt": new Date("2025-12-06T16:27:29.549Z")
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
          "createdAt": new Date("2025-12-06T16:45:08.080Z"),
          "updatedAt": new Date("2025-12-06T16:45:08.080Z")
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
          "createdAt": new Date("2025-12-07T05:18:47.241Z"),
          "updatedAt": new Date("2025-12-07T05:18:47.241Z")
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
          "createdAt": new Date("2025-12-07T05:33:57.811Z"),
          "updatedAt": new Date("2025-12-07T05:33:57.811Z")
        },
        {
      "id": 9,
      "name": "LOTRIAL/ ACETENSIL/ BARIPRIL/  ",
      "generic": "ENALAPRIL",
      "description": "El Enalaprilato es un inhibidor de la enzima de conversión de la angiotensina (ECA). La enalapril, es un pro-fármaco del enalaprilato diseñado para su administración oral. La ECA es una peptidil-dipeptidasa que cataliza la conversión de la angiotensina I a la angiotensina II, una sustancia vasoconstrictora. La angiotensina II también estimula la secreción de aldosterona por la corteza suprarrenal. Los efectos beneficiosos de la enalapril en la hipertensión y la insuficiencia cardíaca se deben a la supresión del sistema renina-angiotensina-aldosterona.  La inhibición de la ECA lleva consigo una disminución de los niveles plasmáticos de angiotensina II produciendo una disminución de la respuesta vasopresora y de la secreción de aldosterona. Aunque la disminución de la secreción de aldosterona no es muy grande, ocasiona un pequeño aumento de los niveles plasmáticos de potasio. ",
      "dosage": "5,10, 20 MG VIA ORAL,Se usa en dependencia de las patologias cardiacas, y grado de tension arterial. ",
      "treatmentPeriod": "Puede ser una vez, dos veces, tres veces al día o permanente o dependiendo dosis respuesta. ",
      "pharmaGroupId": 1,
      "presentationId": 5,
      "addedBy": 2,
      "createdAt": new Date("2025-12-10T01:26:55.099Z"),
      "updatedAt": new Date("2025-12-10T01:26:55.099Z")
    },
    {
      "id": 10,
      "name": "CAPOTEN/ CAPTRAL/ ALTIVER",
      "generic": "CAPTOPRIL",
      "description": "El captopril es un inhibidor de la enzima convertidora de angiotensina (IECA) que actúa bloqueando la proteína peptidasa del centro activo de la misma. El captoprilo inhibe la dipeptidasa de peptidilo, una enzima convertidora que hidroliza la angiotensina I en angiotensina II e inactiva a la bradicina, un potente vasodilatador que actúa al menos en parte por estimulación de la secreción de óxido nítrico y prostaciclina. La actividad hipotensora del captoprilo es resultado de una acción inhibitoria sobre el sistema renina-angiotensina y una estimulante del sistema calcicreína-cinina.",
      "dosage": "25 a 50 mg , en crisis hipertensiva, o de mantenimiento una vez, dos veces, tres veces al día dependiendo de la patología y grado de control de la presión arterial    ",
      "treatmentPeriod": "Puede ser una vez, dos veces, tres veces al día o permanente o dependiendo dosis respuesta. o patologia y grado de control de la presión arterial ",
      "pharmaGroupId": 1,
      "presentationId": 5,
      "addedBy": 2,
      "createdAt": new Date("2025-12-10T02:44:01.339Z"),
      "updatedAt": new Date("2025-12-10T02:44:01.339Z")
    },
    {
      "id": 11,
      "name": "ALISI, LOSARTAN CALOX, LOSARTAN MK, ",
      "generic": "LOSARTAN POTASICO",
      "description": "El losartán es un fármaco antagonista de los receptores de angiotensina II (ARA II) usado para la hipertensión arterial, la insuficiencia cardíaca, y para proteger los riñones en diabéticos tipo 2, actuando al relajar los vasos sanguíneos y disminuir la presión arterial.   El losartán inhibe la liberación de vasopresina inducida por angiotensina II, la liberación de catecolaminas suprarrenales, las respuestas presoras rápidas y lentas, la sed, la hipertrofia e hiperplasia celular, la neurotransmisión noradrenérgica y el aumento del tono simpático. Propiedades farmacodinámicas: Losartán inhibe el efecto presor de las infusiones de angiotensina II (así como de la angiotensina I). Una dosis de 100 mg inhibe el efecto presor en alrededor del 85% en el pico con el 25-40% de la inhibición persistiendo durante 24 horas.",
      "dosage": "50 Mg y 100 mg al dia dependiendo del estado de control de la presion arteril y patologia",
      "treatmentPeriod": "Puede indicarse permanente mente o temporal dependiendo de la patologia y estado de control de la presion arterial",
      "pharmaGroupId": 1,
      "presentationId": 5,
      "addedBy": 2,
      "createdAt": new Date("2025-12-13T21:43:33.808Z"),
      "updatedAt": new Date("2025-12-13T21:43:33.808Z")
    },
    {
      "id": 12,
      "name": "TENSIBER, IVEPRAX, IRBESARTAN CALOX, IRBESARTAN LA SANTE",
      "generic": "IRBESARTAN ",
      "description": "El irbesartán pertenece a una clase de medicamentos llamados antagonistas del receptor de la angiotensina II. Su acción consiste en bloquear la acción de determinadas sustancias naturales que tensan los vasos sanguíneos, lo que permite que la sangre fluya más fácilmente y que el corazón bombee con más eficacia. Mecanismo de acción: Irbesartán es un potente antagonista selectivo del receptor de la angiotensina II (tipo AT1), activo por vía oral. Parece bloquear todas las acciones de la angiotensina-II, mediadas por el receptor AT1, con independencia del origen o la vía de síntesis de la angiotensina-II. Es un antagonista competitivo de los receptores de la angiotensina II con actividad Selectiva sobre el sub-tipo AT1, por el cual muestra una afinidad 8.500 veces superior A la registrada por el AT2. Bloquea la unión de la angiotensina II a sus receptores en El músculo liso, glándula suprarrenal y otros tejidos, inhibiendo así el efecto vasopresor Del sistema renina-angiotensina, la síntesis y liberación de aldosterona y la reabsorción De sodio a nivel renal.  ",
      "dosage": "150- 300 MG AL DIA ",
      "treatmentPeriod": "Puede indicarse permanente mente o temporal dependiendo de la patologia y estado de control de la presión arterial",
      "pharmaGroupId": 1,
      "presentationId": 5,
      "addedBy": 2,
      "createdAt": new Date("2025-12-13T21:58:02.706Z"),
      "updatedAt": new Date("2025-12-13T21:58:02.706Z")
    }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('drug', null, {});
  }
};
