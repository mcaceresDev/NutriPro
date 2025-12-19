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

                    let findedDrug = prescriptionDrugs.find((d) => d.id == data.drugId)
                    if (!findedDrug) {
                        fillModalForm(data);
                        selectedFood = data
                        return
                    }
                    let findedInteraction = interactions.find((inter) => inter.foodId == data.id && inter.drugId == findedDrug.id)
                    if (findedInteraction) {
                        // console.log(findedInteraction);
                        // console.log(data);
                        
                        let isUrl = isValidUrl(findedInteraction.reference) ? `<a href=${findedInteraction.reference} target="_blank">Revisar fuente</a>` : `<span>${findedInteraction.reference}</span>`
                        Swal.fire({
                            title: "¿Estas seguro que deseas agregar este alimento?",
                            html: `
                                <p class="text-center">Hay una interacción con un fármaco que toma este paciente: ${findedInteraction.drug.name}</p>
                                <div class="d-flex justify-content-start align-items-start flex-column">
                                    <div><b>Efecto:</b> <span>${findedInteraction.type}</span></div>
                                    <div><b>Enfermedad asociada:</b> <span>${findedInteraction.disease.name}</span></div>
                                    <div class="text-start"><b>Resultado:</b> <span>${findedInteraction.effect}</span></div>
                                    <div class="text-start"><b>Fuente:</b> ${isUrl}</div>
                                </div>
                            `,
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
                    else{
                        fillModalForm(data);
                        selectedFood = data 
                    }
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

