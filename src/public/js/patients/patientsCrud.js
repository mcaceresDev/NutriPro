const getPatientsByUser = async () => {
    try {
        const res = await fetch(`/pacientes/user-patients`, {
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
    console.log(payload);
    
    
    try {
        
        const res = await fetch(`/pacientes/add-new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const data = await res.json();

        if (res.ok) {
            sendFeedBack(data.message, alertType.success)
            getPatientsByUser()
            form.reset()
        } else {
            sendFeedBack(data.message, alertType.error)
        }
    } catch (err) {
        // console.log(err);
        sendFeedBack(err.message, alertType.error)
    }
});


// document.getElementById("formEditar").addEventListener("submit", async function (e) {    
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);

//     // Convierte todos los inputs en un objeto
//     const payload = Object.fromEntries(formData.entries());
//     try {

//         const res = await fetch(`/nutrientes/update-item/${payload.id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(payload)
//         });
//         const data = await res.json();

//         if (res.ok) {
//             sendFeedBack(data.message, alertType.success)
//             getFoodById()
//             form.reset()
//             bootstrap.Modal.getInstance(document.getElementById("modalEditar")).hide();
//         } else {
//             sendFeedBack(data.message, alertType.error)
//         }
//     } catch (err) {
//         console.log(err);
//         sendFeedBack(err.message, alertType.error)
//     }
// });

function fillModalForm(data) {
    const form = document.getElementById("formEditar");

    Object.keys(data).forEach(key => {
        const input = form.querySelector(`[name="${key}"]`);
        if (input) {
            input.value = data[key];
        }
    });
}