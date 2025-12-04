

// Nivel de actividad (Factor de actividad)
const activityFactor = {
    low: 1.2,
    light: 1.375,
    medium: 1.55,
    hard: 1.725,
    veryHard: 1.9,
}

// Fórmulas de HarrisBenedict para calcular metabolismo basal
const calcTMB = (gender, weight, height, age, fa) => {
    if (gender !== 'M' && gender !== 'F') return { message: "Género inválido" }

    let cmHeight = height * 100

    if (gender === "M") {
        // Hacer los calculos para hombre
        const GEB = 66 + (13.7 * weight) + (5 * cmHeight) - (6.8 * age) //Gasto Energetico Basal
        const GET = GEB * fa //Gasto Energetico Total
        return { GEB, GET }
    }
    //Hacer calculos para mujer
    const GEB = 655 + (9.6 * weight) + (1.8 * cmHeight) - (4.7 * age)
    const GET = GEB * fa //Gasto Energetico Total
    return { GEB, GET }
}

const calcIMC = (weight, height) => {
    const IMC = weight / Math.pow(height, 2)
    return IMC
}

const btnCalcMB = document.getElementById("btnCalcMB")
btnCalcMB.addEventListener("click", (e) => {
    e.preventDefault()
    const weight = parseFloat(document.getElementById("weight").value)
    const height = parseFloat(document.getElementById("height").value)
    const age = parseInt(document.getElementById("age").value)
    const gender = document.getElementById("gender").value
    const activityLevel = document.getElementById("inputFa").value
    const fa = activityFactor[activityLevel]

    const { GEB, GET } = calcTMB(gender, weight, height, age, fa)
    console.log(GEB);
    console.log(GET);
    
    const imc = calcIMC(weight, height)

    document.getElementById("geb").value = GEB.toFixed(2)
    document.getElementById("get").value = GET.toFixed(2)
    document.getElementById("imc").value = imc.toFixed(2)
})


// CALCULOS PARA RIESGO CORONARIO
// ================================================================
function calculateCoronaryRisk(gender, totalFat, hdl) {
    // ---- VALIDACIONES BASE ----
    if (!gender || totalFat == null || hdl == null) {
        throw new Error("Los campos: Genero, Colesterol Total y HDL son obligatorios");
    }

    // Normalizar genero (solo M o F)
    gender = gender.toUpperCase();
    if (gender !== "M" && gender !== "F") {
        throw new Error("El género debe ser 'Masculino' para hombre o 'Femenino' para mujer");
    }

    // Validaciones numéricas básicas
    if (isNaN(totalFat) || isNaN(hdl) || totalFat <= 0 || hdl <= 0) {
        throw new Error("Colesterol Total y HDL deben ser números mayores a 0");
    }

    // ---- CALCULAR RIESGO ----
    const risk = Number((totalFat / hdl).toFixed(2));

    // ---- TABLAS DE REFERENCIA ----
    const reference = {
        M: [
            { min: 0, max: 3.8, level: "Muy Bajo" },
            { min: 3.9, max: 4.7, level: "Bajo" },
            { min: 4.8, max: 5.9, level: "Moderado" },
            { min: 6.0, max: 6.9, level: "Alto" },
            { min: 7.0, max: Infinity, level: "Muy Alto" }
        ],
        F: [
            { min: 0, max: 2.9, level: "Muy Bajo" },
            { min: 3.0, max: 3.6, level: "Bajo" },
            { min: 3.7, max: 4.6, level: "Moderado" },
            { min: 4.7, max: 5.6, level: "Alto" },
            { min: 5.7, max: Infinity, level: "Muy Alto" }
        ]
    };

    // ---- DETERMINAR NIVEL ----
    const match = reference[gender].find(r => risk >= r.min && risk <= r.max);

    if (!match) {
        throw new Error("No se pudo calcular el nivel de riesgo.");
    }

    return {
        risk,
        level: match.level
    };
}

// CALCULOS PARA SINDROME METABOLICO
// ================================================================
const validateMetabolicSyndrome = (gender, trc, sisPres, diaPres, glu, hdl, waist, calf) => {
    // Referencias Generales para ambos sexos
    const trigliceridos = 150 //MG/DL Igual o menor es normal
    const sistolica = 130 //Igual o menor es normal 
    const diastolica = 85 //Igual o menor es normal
    const glucose = 110 //MG/DL Menor o igual es normal
    const calfC = 31 //Menor a 31 implica desnutricion

    //Referencias individuales
    const colesterolHDL = {
        men: 40, //MG/DL Igual o mayor es normal. Deseable 60
        women: 50 //MG/DL Igual o mayor es normal. Deseable 60
    }
    const waistCircumference = {
        men: 102, //Igual o menor es normal (medida en cm)
        women: 88 //Igual o menor es normal (medida en cm)
    }

    let counter = 0
    let patientEvalution = {
        trig: {
            message: ""
        },
        bloddPressure: {
            message: ""
        },
        glucose: {
            message: ""
        },
        hdl: {
            message: ""
        },
        waist: {
            message: ""
        },
        metabolicSyndrome: {
            isTrue: false,
            message: ""
        },
        malnutrition: false
    }

    if (trc > trigliceridos) {
        patientEvalution.trig.message = "Trigliceridos por encima de rango normal " + trigliceridos
        counter++
    }
    if (sisPres > sistolica) {
        counter++
    }
    if (diaPres > diastolica) {
        counter++
    }
    if (glu > glucose) {
        patientEvalution.glucose.message = "Glucosa por encima del rango normal " + glucose
        counter++
    }
    if (calf < calfC) {
        patientEvalution.malnutrition = true
    }
    //referencias individuales
    if (gender === "M") {
        if (hdl < colesterolHDL.men) {
            patientEvalution.hdl.message = "Colesterol hdl por debajo del rango normal " + colesterolHDL.men
            counter++
        }
        if (waist > waistCircumference.men) {
            patientEvalution.waist.message = "Medida de cintura por encima de lo normal " + waistCircumference.men
            counter++
        }
        if (counter >= 4) {
            patientEvalution.metabolicSyndrome = true
        }
        return patientEvalution
    }

    if (hdl < colesterolHDL.women) {
        patientEvalution.hdl.message = "Colesterol hdl por debajo del rango normal " + colesterolHDL.women
        counter++
    }
    if (waist > waistCircumference.women) {
        patientEvalution.waist.message = "Medida de cintura por encima de lo normal " + waistCircumference.women
        counter++
    }
    if (counter >= 4) {
        patientEvalution.metabolicSyndrome = true
    }
    return patientEvalution
}

// ================================================================

function evaluatePatient(data) {

    // Valores de referencia
    const refs = {
        trigliceridos: 150,
        sistolica: 130,
        diastolica: 85,
        glucose: 110,
        hdl: { M: 40, F: 50 },
        waist: { M: 102, F: 88 },
        calfC: 31
    }

    const messages = [];
    let alteredCount = 0;

    // --- Evaluaciones individuales ---
    // Triglicéridos
    if (data.trigliceridos > refs.trigliceridos) {
        alteredCount++;
        messages.push(`• Triglicéridos elevados (${data.trigliceridos} mg/dL). Normal ≤ ${refs.trigliceridos}.`);
    } else {
        messages.push(`• Triglicéridos normales (${data.trigliceridos} mg/dL).`);
    }

    // Presión sistólica
    if (data.sistolica > refs.sistolica) {
        alteredCount++;
        messages.push(`• Presión sistólica elevada (${data.sistolica} mmHg). Normal ≤ ${refs.sistolica}.`);
    } else {
        messages.push(`• Presión sistólica normal (${data.sistolica} mmHg).`);
    }

    // Presión diastólica
    if (data.diastolica > refs.diastolica) {
        alteredCount++;
        messages.push(`• Presión diastólica elevada (${data.diastolica} mmHg). Normal ≤ ${refs.diastolica}.`);
    } else {
        messages.push(`• Presión diastólica normal (${data.diastolica} mmHg).`);
    }

    // Glucosa
    if (data.glucose > refs.glucose) {
        alteredCount++;
        messages.push(`• Glucosa elevada (${data.glucose} mg/dL). Normal ≤ ${refs.glucose}.`);
    } else {
        messages.push(`• Glucosa normal (${data.glucose} mg/dL).`);
    }

    // Colesterol HDL
    if (data.hdl < refs.hdl[data.sex]) {
        alteredCount++;
        messages.push(`HDL bajo (${data.hdl} mg/dL). Normal ≥ ${refs.hdl[data.sex]} para ${data.sex}.`);
    } else {
        messages.push(`HDL adecuado (${data.hdl} mg/dL).`);
    }

    // Circunferencia de cintura
    if (data.waist > refs.waist[data.sex]) {
        alteredCount++;
        messages.push(`Circunferencia de cintura elevada (${data.waist} cm). Normal ≤ ${refs.waist[data.sex]} para ${data.sex}.`);
    } else {
        messages.push(`Circunferencia de cintura normal (${data.waist} cm).`);
    }

    // CalfC (pantorrilla)
    let calfMessage = "";
    if (data.calfC < refs.calfC) {
        calfMessage = `Circunferencia de pantorrilla baja (${data.calfC} cm). Riesgo de desnutrición.`;
    } else {
        calfMessage = `Circunferencia de pantorrilla adecuada (${data.calfC} cm).`;
    }

    // --- Resultado final ---
    const hasMetabolicSyndrome = alteredCount >= 3;

    return {
        alteredCount,
        hasMetabolicSyndrome,
        messages,
        calfMessage,
        finalMessage: hasMetabolicSyndrome
            ? "⚠️ El paciente presenta 3 o más parámetros alterados. Requiere referencia a un especialista por síndrome metabólico."
            : "✔️ El paciente no cumple criterios para síndrome metabólico."
    };
}

// ================================================================


const btnCalcDB = document.getElementById("btnCalcDB")
btnCalcDB.addEventListener("click", (e) => {
    e.preventDefault()
    try {
        const totalFat = parseFloat(document.getElementById("ct").value)
        const hdl = parseInt(document.getElementById("hdl").value)
        
        const PatientData = {
            sex: document.getElementById("gender").value,
            trigliceridos: parseFloat(document.getElementById("tgc").value),
            sistolica: parseInt(document.getElementById("sistolica").value),
            diastolica: parseInt(document.getElementById("diastolica").value),
            glucose: document.getElementById("gl").value,
            hdl,
            waist: document.getElementById("waist").value,
            calfC: document.getElementById("calf").value
        }

        const coronary = calculateCoronaryRisk("M", totalFat, hdl)
        const metabolicSyndrome = evaluatePatient(PatientData)

        // Mostrar resultados en la interfaz
        document.getElementById("ref1").innerText = `Riesgo Coronario: ${coronary.risk} (${coronary.level})`

        const messagesContainer = document.getElementById("messagesContainer")
        messagesContainer.innerHTML = `<h5>Resultados de la evaluación:</h5>`
        metabolicSyndrome.messages.forEach(msg => {
            const p = document.createElement("div")
            p.classList.add("alert", "alert-warning")
            p.innerText = msg
            messagesContainer.appendChild(p)
        })
        // metabolicSyndrome.messages.forEach((msg, index) => {
        //     document.getElementById(`ref${index + 2}`).innerText = msg
        // })
    } catch (error) {
        sendFeedBack(error.message, "error")
    }



})