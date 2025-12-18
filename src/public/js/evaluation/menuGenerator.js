// CALCULOS DE PLAN NUTRICIONAL
let selectedFood = {}
let foodItems = []
let nutritionalMenu = {
    lunes: { desayuno: [], merienda1: [], almuerzo: [], merienda2: [], cena: [] },
    martes: { desayuno: [], merienda1: [], almuerzo: [], merienda2: [], cena: [] },
    miercoles: { desayuno: [], merienda1: [], almuerzo: [], merienda2: [], cena: [] },
    jueves: { desayuno: [], merienda1: [], almuerzo: [], merienda2: [], cena: [] },
    viernes: { desayuno: [], merienda1: [], almuerzo: [], merienda2: [], cena: [] },
    sabado: { desayuno: [], merienda1: [], almuerzo: [], merienda2: [], cena: [] },
    domingo: { desayuno: [], merienda1: [], almuerzo: [], merienda2: [], cena: [] }
}
const calcNutritionValues = (grComsumed, foodItem) => {
    const factor = grComsumed / 100;
    const energy = factor * parseFloat(foodItem.energy)
    const protein = factor * parseFloat(foodItem.protein)
    const totalFat = factor * parseFloat(foodItem.totalFat)
    const carbs = factor * parseFloat(foodItem.carbs)

    return { energy, protein, totalFat, carbs }
}
function isEmpty(val) {
  return val === undefined || val === null || String(val).trim() === "";
}
document.getElementById("btnCalcFood").addEventListener("click", () => {

    try {
        const amount = document.getElementById("amount")
        const portion = document.getElementById("portion")
        if (isEmpty(amount.value) || isEmpty(portion.value)) {
            throw new Error("Los campos 'cantidad' y 'porcion estimada gr' son obligatorios y deben ser numericos");
        }
        
        if (measure.value == 0) {
            throw new Error("Debes elegir un tipo de medida");
        }
        // if (measure.value === "otra" && isEmpty(measuretype.value)) {
        //     throw new Error("Si eliges 'Otra' debes especificar el tipo de medida");
        // }
        
        const totalGr = amount.value * portion.value
        // console.log(portion);
        const result = calcNutritionValues(totalGr, selectedFood)
        foodItems.push(result)
        const lista = document.createElement("ul")
        lista.classList.add("list-unstyled")
        foodItems.forEach((item) => {
            const items = `
        <li><img src="/assets/img/calorias.png" class="nutrient-icon" /> <span class="mx-3"> ${result.energy.toFixed(2)} kcal </span> </span></li>
        <li><img src="/assets/img/proteina.png" class="nutrient-icon" /> <span class="mx-3"> ${result.protein.toFixed(2)} gr </span></li>
        <li><img src="/assets/img/lipido.png" class="nutrient-icon" />  <span class="mx-3"> ${result.totalFat.toFixed(2)} gr </span></li>
        <li><img src="/assets/img/carbohidratos.png" class="nutrient-icon" />  <span class="mx-3"> ${result.carbs.toFixed(2)} gr </span></li>
        `
            lista.innerHTML = items
        })
        const texto = `<h6 class="my-3">${amount.value} ${measure.value === "otra" ? measuretype.value : measure.value} ${altname.value != "" ? altname.value : incapname.value} equivale a ${amount.value*portion.value}gr y tiene:</h6>`
        foodCalcsContainer.innerHTML = texto
        foodCalcsContainer.appendChild(lista)

        const foodForm = `
        <h6>Si estas de acuerdo con estas proporciones para su menu nutricional, llene los campos a continuación y haga click en el boton agregar</h6>
        <form id="" class="row g-3">
        
        <div class="col-md-12">
            <label for="inputState" class="form-label">Texto en el menu</label>
            <div class="d-flex gap-3">
                <input type="text" id="foodMenuName" name="" class="form-control form-control-sm" placeholder="" value="${amount.value} ${measure.value === "otra" ? measuretype.value : measure.value} ${altname.value != "" ? altname.value : incapname.value}">
            </div>
        </div>
        <div class="col-md-6">
            <label for="inputState" class="form-label">Seleccionar dia de la semana</label>
                <select id="weekDay" class="form-select form-select-sm">
                    <option value="lunes" selected>Lunes</option>
                    <option value="martes">Martes</option>
                    <option value="miercoles">Miercoles</option>
                    <option value="jueves">Jueves</option>
                    <option value="viernes">Viernes</option>
                    <option value="sabado">Sábado</option>
                    <option value="domingo">Domingo</option>
                </select>
        </div>
        <div class="col-md-6">
            <label for="inputState" class="form-label">Seleccionar comida del dia</label>
                <select id="foodTime" class="form-select form-select-sm">
                    <option value="desayuno" selected>Desayuno</option>
                    <option value="merienda1">Merienda matutina</option>
                    <option value="almuerzo">Almuerzo</option>
                    <option value="merienda2">Merienda vespertina</option>
                    <option value="cena">Cena</option>
                </select>
        </div>
        <div class="w-100 d-flex col-12 justify-content-center">
            <button type="button" id="btnAddFood" class="btn btn-sm btn-success">Agregar</button>
        </div>
        </form>
    `
        foodFormContainer.innerHTML = foodForm
        document.getElementById("btnAddFood").addEventListener("click", (e) => {
            const dayOfTheWeek = nutritionalMenu[weekDay.value]
            const mealOfTheDay = dayOfTheWeek[foodTime.value]
            mealOfTheDay.push(foodMenuName.value)
            renderFoodData()
        })
    } catch (error) {
        sendFeedBack(error.message, alertType.error)
    }

})


const renderFoodData = () => {
    const tbody = document.getElementById("foodTableBody");
    tbody.innerHTML = "";

    const mealsOrder = ["desayuno", "merienda1", "almuerzo", "merienda2", "cena"];

    Object.entries(nutritionalMenu).forEach(([day, meals]) => {
        const tr = document.createElement("tr");

        // Día
        const tdDay = document.createElement("td");
        tdDay.textContent = capitalize(day);
        tr.appendChild(tdDay);

        // Comidas
        mealsOrder.forEach(meal => {
            const td = document.createElement("td");
            td.innerHTML = meals[meal].length
                ? meals[meal].join("<br>")
                : "<em>—</em>";
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}