// Helper: comprobar si un valor está vacío (null/undefined/'' sólo espacios)
function isEmpty(val) {
  return val === undefined || val === null || String(val).trim() === "";
}

const getInteractions = async () => {
    try {
        const res = await fetch(`/interacciones/all`, {
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
        if (isEmpty(payload.foodId)) {
            throw new Error("El campo alimento es obligatorio");
        }
        if (isEmpty(payload.diseaseId)) {
            throw new Error("El campo enfermedad es obligatorio");
        }
        if (isEmpty(payload.drugId)) {
            throw new Error("El campo fármaco es obligatorio");
        }
        
        const res = await fetch(`/interacciones/add-new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const data = await res.json();

        if (res.ok) {
            sendFeedBack(data.message, alertType.success)
            getInteractions()
            form.reset()
            bootstrap.Modal.getInstance(document.getElementById("modalAgregar")).hide();
        } else {
            sendFeedBack(data.message, alertType.error)
        }
    } catch (err) {
        console.log(err);
        sendFeedBack(err.message, alertType.error)
    }
});


