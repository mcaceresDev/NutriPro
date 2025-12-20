document.getElementById("formLogin").addEventListener("submit", async function (e) {
    e.preventDefault();    
    try {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        const res = await fetch(`/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        });
        const data = await res.json();

        if (res.ok) {
            sendFeedBackBox(data.message)
            setTimeout(()=>{
                window.location.href = "/inicio";
            }, 800)
        } else {
            // sendFeedBack(data.message, alertType.error)
            let tagMessage = document.getElementById("error-message")
            setTimeout(()=>{
                tagMessage.classList.remove("d-none")
                tagMessage.innerText=data.message
            }, 1500)
            tagMessage.classList.add("d-none")
            tagMessage.innerText=""
        }
    } catch (err) {
        console.log(err);
        sendFeedBack(err.message, alertType.error)
    }
});