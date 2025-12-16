document.getElementById("btnGenPDF").addEventListener("click", async function (e) {
    
    // Convierte todos los inputs en un objeto
    console.log(nutritionalMenu);
    
    try {
        const res = await fetch(`/reporte`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nutritionalMenu)
        });

        return res
        // if (res.ok) {
        //     sendFeedBack(data.message, alertType.success)
        //     getAllDrugs()
        //     form.reset()
        //     bootstrap.Modal.getInstance(document.getElementById("modalAgregar")).hide();
        // } else {
        //     sendFeedBack(data.message, alertType.error)
        // }
    } catch (err) {
        // console.log(err);
        sendFeedBack(err.message, alertType.error)
    }
    
});