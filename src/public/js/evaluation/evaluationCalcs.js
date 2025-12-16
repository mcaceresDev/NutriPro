let globalEvaluation = {
    clinic: [],
    measures: [],
    biochemical: [],

}

let diagnoseDiseases = []
let foodAlergies = []
let drugAlergies = []

// Nivel de actividad (Factor de actividad)
const activityFactor = {
    low: 1.2,
    light: 1.375,
    medium: 1.55,
    hard: 1.725,
    veryHard: 1.9,
}
const genero = {
    M: "Hombre",
    F: "Mujer"
}

// Fórmulas de HarrisBenedict para calcular metabolismo basal
const calcTMB = (gender, weight, height, age, fa) => {
    if (gender !== 'M' && gender !== 'F') return { message: "Género inválido" }

    let cmHeight = height * 100

    if (gender === "M") {
        // Hacer los calculos para hombre
        const GEB = 66.5 + (13.75 * weight) + (5 * cmHeight) - (6.755 * age) //Gasto Energetico Basal
        const GET = GEB * fa //Gasto Energetico Total
        return { GEB, GET }
    }
    //Hacer calculos para mujer
    const GEB = 655.1 + (9.563 * weight) + (1.850 * cmHeight) - (4.676 * age)
    const GET = GEB * fa //Gasto Energetico Total
    return { GEB, GET }
}

const calcIMC = (weight, height) => {
    const references = [
        { min: 0, max: 18.5, level: "danger", msg: "Bajo peso" },
        { min: 18.6, max: 24.9, level: "success", msg: "Peso normal" },
        { min: 25, max: 29.9, level: "danger", msg: "Sobrepeso" },
        { min: 30, max: 34.9, level: "danger", msg: "Obesidad I" },
        { min: 35, max: 39.9, level: "danger", msg: "Obesidad II" },
        { min: 40, max: Infinity, level: "danger", msg: "Obesidad III" },
    ]

    const IMC = weight / Math.pow(height, 2)
    const match = references.find(imc => IMC >= imc.min && IMC <= imc.max);
    if (!match) {
        throw new Error("No se pudo calcular el nivel de riesgo.");
    }

    measureAlertContainer.className = '';
    measureAlertContainer.classList.add("alert", `alert-${match.level}`)
    measureAlertContainer.innerHTML = `El paciente tiene: <strong>${match.msg}</strong> segun categoría OMS`
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
            { min: 0, max: 3.8, level: "success", msg: "Muy Bajo" },
            { min: 3.9, max: 4.7, level: "success", msg: "Bajo" },
            { min: 4.8, max: 5.9, level: "warning", msg: "Moderado" },
            { min: 6.0, max: 6.9, level: "danger", msg: "Alto" },
            { min: 7.0, max: Infinity, level: "danger", msg: "Muy Alto" }
        ],
        F: [
            { min: 0, max: 2.9, level: "success", msg: "Muy Bajo" },
            { min: 3.0, max: 3.6, level: "success", msg: "Bajo" },
            { min: 3.7, max: 4.6, level: "warning", msg: "Moderado" },
            { min: 4.7, max: 5.6, level: "danger", msg: "Alto" },
            { min: 5.7, max: Infinity, level: "danger", msg: "Muy Alto" }
        ]
    };

    // ---- DETERMINAR NIVEL ----
    const match = reference[gender].find(r => risk >= r.min && risk <= r.max);

    if (!match) {
        throw new Error("No se pudo calcular el nivel de riesgo.");
    }

    return {
        risk,
        level: match.level,
        msg: match.msg
    };
}

// CALCULOS PARA SINDROME METABOLICO
// ================================================================

function evaluatePatient(data, totalFat) {

    // Valores de referencia
    const refs = {
        totalFat: 200,
        trigliceridos: 150,
        sistolica: 130,
        diastolica: 85,
        glucose: 110,// 70 a 99 mg/dL. en personas sanas | Entre 100 y 125 mg/dL se considera prediabetes pero algunas referencias varian
        hdl: { M: 40, F: 50 },
        waist: { M: 102, F: 88 },
        calfC: 31
    }

    const messages = [];
    let alteredCount = 0;

    // --- Evaluaciones individuales ---
    // Colesterol Total
    if (totalFat > refs.totalFat) {
        messages.push({ alertType: "danger", msg: `• Colesterol total elevado ${totalFat} mg/dL. El paciente presenta "Hipercolesterolemia" | Normal ≤ ${refs.totalFat}.` });
    } else {
        messages.push({ alertType: "success", msg: `• Colesterol normal (${totalFat} mg/dL).` });
    }
    // Triglicéridos
    if (data.trigliceridos > refs.trigliceridos) {
        alteredCount++;
        let hiper = data.trigliceridos > 200 ? `El paciente presenta "Hipertrigliceridemia"` : ""
        messages.push({ alertType: "danger", msg: `• Triglicéridos elevados (${data.trigliceridos} mg/dL). ${hiper} Normal ≤ ${refs.trigliceridos}.` });
    } else {
        messages.push({ alertType: "success", msg: `• Triglicéridos normales (${data.trigliceridos} mg/dL).` });
    }

    // Presión sistólica
    if (data.sistolica > refs.sistolica) {
        alteredCount++;
        messages.push({ alertType: "danger", msg: `• Presión sistólica elevada (${data.sistolica} mmHg). Normal ≤ ${refs.sistolica}.` });
    } else {
        messages.push({ alertType: "success", msg: `• Presión sistólica normal (${data.sistolica} mmHg).` });
    }

    // Presión diastólica
    if (data.diastolica > refs.diastolica) {
        alteredCount++;
        messages.push({ alertType: "danger", msg: `• Presión diastólica elevada (${data.diastolica} mmHg). Normal ≤ ${refs.diastolica}.` });
    } else {
        messages.push({ alertType: "success", msg: `• Presión diastólica normal (${data.diastolica} mmHg).` });
    }

    // Glucosa
    if (data.glucose > refs.glucose) {
        alteredCount++;
        messages.push({ alertType: "danger", msg: `• Glucosa elevada (${data.glucose} mg/dL). Normal ≤ ${refs.glucose}.` });
    } else {
        messages.push({ alertType: "success", msg: `• Glucosa normal (${data.glucose} mg/dL).` });
    }

    // Colesterol HDL
    if (data.hdl < refs.hdl[data.sex]) {
        alteredCount++;
        messages.push({ alertType: "warning", msg: `HDL bajo (${data.hdl} mg/dL). Normal ≥ ${refs.hdl[data.sex]} para ${genero[data.sex]}.` });
    } else {
        messages.push({ alertType: "success", msg: `HDL adecuado (${data.hdl} mg/dL).` });
    }

    // Circunferencia de cintura
    if (data.waist > refs.waist[data.sex]) {
        alteredCount++;
        messages.push({ alertType: "warning", msg: `Circunferencia de cintura elevada (${data.waist} cm). Normal ≤ ${refs.waist[data.sex]} para ${genero[data.sex]}.` });
    } else {
        messages.push({ alertType: "success", msg: `Circunferencia de cintura normal (${data.waist} cm).` });
    }

    // CalfC (pantorrilla)
    let calfMessage = { alertType: "", msg: "" };
    if (data.calfC < refs.calfC) {
        calfMessage = { alertType: "danger", msg: `Circunferencia de pantorrilla baja (${data.calfC} cm). Riesgo de desnutrición.` };
    } else {
        calfMessage = { alertType: "success", msg: `Circunferencia de pantorrilla adecuada (${data.calfC} cm).` };
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
        const metabolicSyndrome = evaluatePatient(PatientData, totalFat)

        // Mostrar resultados en la interfaz  Nivel de riesgo 1 - 5 (de muy bajo a muy alto)
        let refCoronary = document.getElementById("refCoronary")
        refCoronary.className = '';
        refCoronary.classList.add("alert", `alert-${coronary.level}`)
        refCoronary.innerText = `Riesgo Coronario: ${coronary.risk} (${coronary.msg})`

        const messagesContainer = document.getElementById("messagesContainer")
        messagesContainer.innerHTML = `<h5>Resultados de la evaluación:</h5>`
        metabolicSyndrome.messages.forEach(value => {
            const alert = document.createElement("div")
            alert.classList.add("alert", `alert-${value.alertType}`)
            alert.innerText = value.msg
            messagesContainer.appendChild(alert)
        })

        if (metabolicSyndrome.hasMetabolicSyndrome) {
            const alert = document.createElement("div")
            alert.classList.add("alert", "alert-danger")
            alert.innerText = metabolicSyndrome.finalMessage
            messagesContainer.appendChild(alert)
        }
        else {
            const alert = document.createElement("div")
            alert.classList.add("alert", "alert-success")
            alert.innerText = metabolicSyndrome.finalMessage
            messagesContainer.appendChild(alert)
        }

        if (metabolicSyndrome.calfMessage.alertType !== "") {
            const { calfMessage } = metabolicSyndrome
            const alert = document.createElement("div")
            alert.classList.add("alert", `alert-${calfMessage.alertType}`)
            alert.innerText = calfMessage.msg
            messagesContainer.appendChild(alert)
        }
    } catch (error) {
        sendFeedBack(error.message, "error")
    }
})

// ================================================================
