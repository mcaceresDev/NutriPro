document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("foodTable");

    const tableData = JSON.parse(container.dataset.food);

    const tabla = new Tabulator("#foodTable", {
        locale: "es-es",
        langs: LANG.langs,
        data: tableData,
        layout: "fitColumns",
        pagination: "local",
        paginationSize: 5,
        responsiveLayout: true,
        columns: [
            { title: "Nombre", field: "name", width: 300 },
            {
                title: "Energía",
                field: "energy",
                formatter: (cell) => {
                    const value = cell.getValue();
                    return `${value} Kcal`;
                }
            }, {
                title: "Proteína",
                field: "protein",
                formatter: (cell) => {
                    const value = cell.getValue();
                    return `${value} g`;
                }
            }, {
                title: "Grasa Total",
                field: "totalFat",
                formatter: (cell) => {
                    const value = cell.getValue();
                    return `${value} g`;
                }
            }, {
                title: "Carbohidratos",
                field: "carbs",
                formatter: (cell) => {
                    const value = cell.getValue();
                    return `${value} g`;
                }
            },
            {
                title: "Seleccionar",
                formatter: () => `
                    <button class="btn btn-success btn-sm btnSelectFoodItem" data-bs-dismiss="modal">
                        <i class="fa-regular fa-circle-check"></i>
                    </button>
                `,
                width: 140,
                cellClick: (e, cell) => {
                    // console.log(cell.getRow().getData());
                    const data = cell
                        .getRow()
                        .getData();

                    

                    let findedInteractions = interactions.filter(interaction => interaction.foodId == data.id)
                    console.log(findedInteractions);
                    
                    if (findedInteractions.length === 0) {
                        fillModalForm(data);
                        selectedFood = data
                        return
                    }
                    
                    let alertContent = ""
                    if (findedInteractions.length > 1) {
                        findedInteractions.map(findedInteraction => {
                            let card = document.createElement("div")
                            //  justify-content-start align-items-start flex-column
                            let isUrl = isValidUrl(findedInteraction.reference) ? `<a href=${findedInteraction.reference} target="_blank">Revisar fuente</a>` : `<span>${findedInteraction.reference}</span>`
                            card.classList.add("d-flex", "justify-content-start", "align-items-start", "flex-column", "mb-3", "p-2", "border", "rounded-3", "bg-light-subtle")
                            card.innerHTML = `<div><b>Efecto:</b> <span>${findedInteraction.type}</span></div>
                                <div><b>Enfermedad asociada:</b> <span>${findedInteraction.disease.name}</span></div>
                                <div class="text-start"><b>Resultado:</b> <span>${findedInteraction.effect}</span></div>
                                <div class="text-start"><b>Fuente:</b> ${isUrl}</div>`
                            
                            interactionsContainer.appendChild(card);
                            alertContent = `<button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#modalDetailsI">
                                                Ver todas
                                            </button>`
                        })

                        Swal.fire({
                            title: "¿Estas seguro que deseas agregar este alimento?",
                            html: alertContent,
                            showDenyButton: true,
                            confirmButtonText: "Si. Agregar",
                            denyButtonText: `No agregar`
                        }).then((result) => {
                            if (result.isDenied) {
                                return
                            }
                            if (result.isConfirmed) {
                                fillModalForm(data);
                                selectedFood = data
                                return
                            }
                        });
                    }
                    
                    if (findedInteractions.length == 1) {
                        console.log("entra al array 1");
                        
                        let isUrl = isValidUrl(findedInteractions[0].reference) ? `<a href=${findedInteractions[0].reference} target="_blank">Revisar fuente</a>` : `<span>${findedInteractions[0].reference}</span>`
                        alertContent = `
                            <p class="text-center">Hay una interacción con un fármaco que toma este paciente: ${findedInteractions[0].drug.name}</p>
                            <div class="d-flex justify-content-start align-items-start flex-column">
                                <div><b>Efecto:</b> <span>${findedInteractions[0].type}</span></div>
                                <div><b>Enfermedad asociada:</b> <span>${findedInteractions[0].disease.name}</span></div>
                                <div class="text-start"><b>Resultado:</b> <span>${findedInteractions[0].effect}</span></div>
                                <div class="text-start"><b>Fuente:</b> ${isUrl}</div>
                            </div>
                        `
                    }

                        Swal.fire({
                            title: "¿Estas seguro que deseas agregar este alimento?",
                            html: alertContent,
                            showDenyButton: true,
                            confirmButtonText: "Si. Agregar",
                            denyButtonText: `No agregar`
                        }).then((result) => {
                            if (result.isDenied) {
                                return
                            }
                            if (result.isConfirmed) {
                                fillModalForm(data);
                                selectedFood = data    
                            }
                        }); 
                    
                }
            }
        ]
    });
    document
        .getElementById("searchFood")
        .addEventListener("keyup", (e) => {
            tabla.setFilter("name", "like", e.target.value);
        });

    function fillModalForm(data) {
        const form = document.getElementById("formPlan");

        Object.keys(data).forEach(key => {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) {
                input.value = data[key];
            }
        });
    }
    function isValidUrl(value) {
    if (!value || typeof value !== "string") return false;

    try {
        new URL(value);
        return true;
    } catch {
        return false;
    }
}
});

