let genDiseases = []
let diagnoseDiseases = []
let foodAlergies = []
let drugAlergies = []

let prescriptionDrugs = []
let interactions = []

const addGenDisease = () => {
    const genContainer = document.getElementById("geneticDiContainer")
    genContainer.classList.add('border', 'p-3', 'border-info');

    const title = document.getElementById("title-gen")
    if (!title) {
        genContainer.innerHTML = "<h5 id='title-gen' class='text-center'>Enfermedades Genéticas</h5>"
    }

    const existDisease = genDiseases.find((disease) => disease.id == genDiseaseList.value)
    if (!existDisease) {
        let newElement = {
            id: genDiseaseList.value,
            name: genDiseaseList
                .options[genDiseaseList.selectedIndex]
                .text
        }
        genDiseases.push(newElement)

        const disease = genDiseaseList
            .options[genDiseaseList.selectedIndex]
            .text;
        const alert = document.createElement("div")
        alert.classList.add("alert", "alert-info", "d-flex", "justify-content-between")
        alert.setAttribute("id", `alertgen-${genDiseaseList.value}`)
        alert.innerHTML = `<span>${disease}</span><button type="button" id="genclose-${genDiseaseList.value}" class="btn-close" aria-label="Close"></button>`
        genContainer.appendChild(alert)
        document.getElementById(`genclose-${genDiseaseList.value}`).addEventListener("click", () => {
            alert.remove()
            genDiseases.splice(genDiseases.indexOf(newElement), 1)
        })

    }
    return
}
document.getElementById("btn-addGenDisease").addEventListener('click', addGenDisease);





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
            let newElement = {
                id: diseaseList.value,
                name: diseaseList
                    .options[diseaseList.selectedIndex]
                    .text
            }
            diagnoseDiseases.push(newElement)
            const disease = diseaseList
                .options[diseaseList.selectedIndex]
                .text;
            const alert = document.createElement("div")
            alert
                .classList
                .add("alert", "alert-danger", "d-flex", "justify-content-between")
            alert.innerHTML = `<span>${disease}</span><button type="button" id="diseaseclose-${diseaseList.value}" class="btn-close" aria-label="Close"></button>`
            diagnoseContainer.appendChild(alert)
            document.getElementById(`diseaseclose-${diseaseList.value}`).addEventListener("click", () => {
            alert.remove()
            diagnoseDiseases.splice(diagnoseDiseases.indexOf(newElement), 1)
        })
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
            drugAlergiesContainer.innerHTML = "<h5 id='title-drug' class='text-center'>Medicamentosas</h5>"
        }

        const existDrug = drugAlergies.find(drug => drug.id == drugList.value)
        if (!existDrug) {
            let newElement = {
                id: drugList.value,
                name: drugList
                    .options[drugList.selectedIndex]
                    .text
            }
            drugAlergies.push(newElement)
            const drug = drugList
                .options[drugList.selectedIndex]
                .text;
            const alert = document.createElement("div")
            alert
                .classList
                .add("alert", "alert-danger", "d-flex", "justify-content-between")
            alert.innerHTML = `<span>${drug}</span><button type="button" id="drugclose-${drugList.value}" class="btn-close" aria-label="Close"></button>`
            drugAlergiesContainer.appendChild(alert)
            document.getElementById(`drugclose-${drugList.value}`).addEventListener("click", () => {
            alert.remove()
            drugAlergies.splice(drugAlergies.indexOf(newElement), 1)
        })
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
            foodAlergies.push({ name: foodName.value })
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


    
    const getInteractions = async () => {
        try {
            const res = await fetch(`/interacciones/all`, {
                method: "GET"
            });
            const data = await res.json();
            
            if (res.ok) {
                //Hace referencia a la tabla cargada con tabulator y la actualiza
                interactions = data.rows
                
                if (drugAlergies.length > 0) {
                    drugCons.innerHTML="<h6>El paciente esta tomando los siguientes fármacos:</h6>"

                    drugAlergies.forEach((drug)=>{                        
                        const alert = document.createElement("div")
                        alert.classList.add("alert", "alert-danger")
                        alert.innerHTML = `<span>${drug.name}</span>`
                        drugCons.appendChild(alert)
                    })
                }
                return
                
            } else {
                sendFeedBack(data.message, alertType.error)
            }
        } catch (err) {
            sendFeedBack(err.message, alertType.error)
        }
    }

const btnSaveAll = document.getElementById("btn-saveall")
btnSaveAll.addEventListener("click", getInteractions)
