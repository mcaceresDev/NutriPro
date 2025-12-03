// Nivel de actividad (Factor de actividad)
const activityFactor = {
    low: 1.2,
    light: 1.375,
    medium: 1.55,
    hard: 1.725,
    veryHard: 1.9,
}

// Fórmulas de HarrisBenedict para calcular metabolismo basal
const calcTMB = (gender, weight, height, age, fa)=> {
    if(gender != 'M' && gender != 'F') return {message: "Género inválido"}
    
    let cmHeight = height * 100

    if (gender === "M") {
        // Hacer los calculos para hombre
        const GEB = [66 + (13.7 * weight) + (5 * cmHeight) - (6.8 * age)] //Gasto Energetico Basal
        const GET = GEB*fa //Gasto Energetico Total
    }
    //Hacer calculos para mujer
    const GEB = 655 + (9.6 * weight) + (1.8 * cmHeight) - (4.7 * age)
    const GET = GEB*fa //Gasto Energetico Total
    return {GEB, GET}
}

const calcIMC = (weight, height)=> {
    const IMC = weight/Math.pow(height,2)
    return IMC
}

const btnCalcMB = document.getElementById("btnCalcMB")
btnCalcMB.addEventListener("click", (e)=> {
    e.preventDefault()
    const weight = parseFloat(document.getElementById("weight").value)
    const height = parseFloat(document.getElementById("height").value)
    const age = parseInt(document.getElementById("age").value)
    const gender = document.getElementById("gender").value
    const activityLevel = document.getElementById("inputFa").value
    const fa = activityFactor[activityLevel]

    const {GEB, GET} = calcTMB(gender, weight, height, age, fa)
    const imc = calcIMC(weight, height)
    console.log(GEB);
    console.log(GET);
    
    document.getElementById("geb").value = GEB.toFixed(2)
    document.getElementById("get").value = GET.toFixed(2)
    document.getElementById("imc").value = imc.toFixed(2)
})