document.getElementById("formEditarPass").addEventListener("submit", async function (e) {
    e.preventDefault();
    
    // const id = document.getElementById("editPassId").value;
    const password = document.getElementById("editPassword").value;
    try {
      
      const res = await fetch(`/users/self-passwd`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password })
      });


      const data = await res.json();
      

      if (res.ok) {
        // Cierra el modal y recarga la tabla
        sendFeedBackBox(data.message, alertType.success)
        // location.reload();
      } else {
        // bootstrap.Modal.getInstance(document.getElementById("modalPassword")).hide();
        sendFeedBack(data.message, alertType.error)
      }
    } catch (err) {
        sendFeedBack(err.message, alertType.error)
    }
  });