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
        } else {
            sendFeedBack(data.message, alertType.error)
        }
    } catch (err) {
        console.log(err);
        sendFeedBack(err.message, alertType.error)
    }
});