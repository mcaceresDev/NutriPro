// Nivel de actividad (Factor de actividad)
const activityFactor = {
    low: 1.2,
    light: 1.375,
    medium: 1.55,
    hard: 1.725,
    veryHard: 1.9,
}

// Fórmulas de HarrisBenedict para calcular metabolismo basal
const calcTMB = (gender, fa)=> {
    if(gender != 'M' && gender != 'F') return {message: "Género inválido"}
    if (gender === "M") {
        // Hacer los calculos para hombre    
    }
    //Hacer calculos para mujer

    return
}

const calcIMC = (weight, height)=> {
    const IMC = weight/Math.pow(height,2)
    return IMC
}