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
            { title: "Nombre", field: "name" },
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
                    <button class="btn btn-success btn-sm btnSelectFoodItem" data-bs-toggle="modal" data-bs-target="#foodModalPlan">
                        <i class="fa-regular fa-circle-check"></i>
                    </button>
                `,
                width: 140,
                cellClick: (e, cell) => {
                    console.log(cell.getRow().getData());
                }
            }
        ]
    });
    document
    .getElementById("searchFood")
    .addEventListener("keyup", (e) => {
        tabla.setFilter("name", "like", e.target.value);
    });
});

