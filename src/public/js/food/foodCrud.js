const getFoodById = async () => {
    try {
        const res = await fetch(`/nutrientes/items-byuser`, {
            method: "GET"
        });
        const data = await res.json();

        if (res.ok) {
            //Hace referencia a la tabla cargada con tabulator y la actualiza
            tabla.setData(data.rows)

        } else {
            sendFeedBack(data.message, alertType.error)
        }
    } catch (err) {
        sendFeedBack(err.message, alertType.error)
    }
}

document.getElementById("formRegistrar").addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Convierte todos los inputs en un objeto
    const payload = Object.fromEntries(formData.entries());
    try {
        if (!payload.categoryId) {
            throw new Error("El campo categoría es obligatorio");
        }
        
        const res = await fetch(`/nutrientes/add-new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const data = await res.json();

        if (res.ok) {
            sendFeedBack(data.message, alertType.success)
            getFoodById()
            form.reset()
        } else {
            sendFeedBack(data.message, alertType.error)
        }
    } catch (err) {
        console.log(err);
        sendFeedBack(err.message, alertType.error)
    }
});


// Helper: comprobar si un valor está vacío (null/undefined/'' sólo espacios)
function isEmpty(val) {
  return val === undefined || val === null || String(val).trim() === "";
}


document.getElementById("formEditar").addEventListener("submit", async function (e) {    
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Convierte todos los inputs en un objeto
    const payload = Object.fromEntries(formData.entries());
    try {

        if (isEmpty(payload.categoryId)) {
            throw new Error("El campo categoría es obligatorio");
        }
        const res = await fetch(`/nutrientes/update-item/${payload.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const data = await res.json();

        if (res.ok) {
            sendFeedBack(data.message, alertType.success)
            getFoodById()
            form.reset()
            bootstrap.Modal.getInstance(document.getElementById("modalEditar")).hide();
        } else {
            sendFeedBack(data.message, alertType.error)
        }
    } catch (err) {
        console.log(err);
        sendFeedBack(err.message, alertType.error)
    }
});

function fillModalForm(data) {
    const form = document.getElementById("formEditar");

    Object.keys(data).forEach(key => {
        const input = form.querySelector(`[name="${key}"]`);
        if (input) {
            input.value = data[key];
        }
    });
}
