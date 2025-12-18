let genDiseases = []
let diagnoseDiseases = []
let foodAlergies = []
let drugAlergies = []


document
            .getElementById("btn-addGenDisease")
            .addEventListener('click', function () {
                const genContainer = document.getElementById("geneticDiContainer")
                genContainer
                    .classList
                    .add('border', 'p-3', 'border-info');
                const title = document.getElementById("title-gen")
                if (!title) {
                    genContainer.innerHTML = "<h5 id='title-gen' class='text-center'>Enfermedades Genéticas</h5>"
                }

                const existDisease = genDiseases.find((disease) => disease.id == genDiseaseList.value)
                if (!existDisease) {
                    genDiseases.push({
                        id: genDiseaseList.value,
                        name: genDiseaseList
                            .options[genDiseaseList.selectedIndex]
                            .text
                    })
                const disease = genDiseaseList
                    .options[genDiseaseList.selectedIndex]
                    .text;
                const alert = document.createElement("div")
                alert
                    .classList
                    .add("alert", "alert-info")
                alert.textContent = disease
                genContainer.appendChild(alert)
            }
                return
            });
        document
            .getElementById("btn-addDisease")
            .addEventListener('click', function () {
                const diagnoseContainer = document.getElementById("diagnoseContainer")
                diagnoseContainer
                    .classList
                    .add('border', 'p-3', 'border-danger-subtle');
                const title = document.getElementById("title-dis")
                if (!title) {
                    diagnoseContainer.innerHTML = "<h5 id='title-dis' class='text-center'>Enfermedades Diagnosticadas</h5>"
                }

                const existDisease = diagnoseDiseases.find((disease) => disease.id == diseaseList.value)
                if (!existDisease) {
                    diagnoseDiseases.push({
                        id: diseaseList.value,
                        name: diseaseList
                            .options[diseaseList.selectedIndex]
                            .text
                    })
                    const disease = diseaseList
                        .options[diseaseList.selectedIndex]
                        .text;
                    const alert = document.createElement("div")
                    alert
                        .classList
                        .add("alert", "alert-danger")
                    alert.textContent = disease
                    diagnoseContainer.appendChild(alert)
                }
                return
            });
        document
            .getElementById("btn-addDrug")
            .addEventListener('click', function () {
                const drugAlergiesContainer = document.getElementById("drugAlergiesContainer")
                drugAlergiesContainer
                    .classList
                    .add('border', 'p-3', 'border-danger-subtle');
                const title = document.getElementById("title-drug")
                if (!title) {
                    drugAlergiesContainer.innerHTML = "<h5 id='title-drug' class='text-center'>Alergias Medicamentosas</h5>"
                }

                const existDrug = drugAlergies.find(drug => drug.id == drugList.value)
                if (!existDrug) {
                    drugAlergies.push({
                        id: drugList.value,
                        name: drugList
                            .options[drugList.selectedIndex]
                            .text
                    })
                    const drug = drugList
                        .options[drugList.selectedIndex]
                        .text;
                    const alert = document.createElement("div")
                    alert
                        .classList
                        .add("alert", "alert-danger")
                    alert.textContent = drug
                    drugAlergiesContainer.appendChild(alert)
                }
                return
            });
        document
            .getElementById("btn-addResFood")
            .addEventListener('click', function () {
                const foodAlergiesContainer = document.getElementById("foodAlergiesContainer")
                foodAlergiesContainer
                    .classList
                    .add('border', 'p-3', 'border-danger-subtle');
                const title = document.getElementById("title-food")
                if (!title) {
                    foodAlergiesContainer.innerHTML = "<h5 id='title-food' class='text-center'>Alergias Alimenticias</h5>"
                }

                const existFood = foodAlergies.find(food => food.name == foodName.value)
                if (!existFood) {
                    foodAlergies.push({name: foodName.value})
                    const food = foodName.value
                    const alert = document.createElement("div")
                    alert
                        .classList
                        .add("alert", "alert-danger")
                    alert.textContent = food
                    foodAlergiesContainer.appendChild(alert)
                }
                return
            });