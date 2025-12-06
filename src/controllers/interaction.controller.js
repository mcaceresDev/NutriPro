class InteractionController {

    getInteractionsView(req, res) {
        try {

            if (!req.session.user) {
                return res.render("pages/forbidden")
            }
            const { name, lastname } = req.session.user

            const username = `${name.split(" ")[0]} ${lastname.split(" ")[0]}`
            return res.render("interaction", { username })
            
        } catch (error) {
            console.log(error);
            return res.render("pages/error")
        }
    }
}

module.exports = new InteractionController()