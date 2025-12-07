const interactionService = require("../services/interaction.service")

class InteractionController {

    getInteractionsView = async(req, res)=> {
        try {

            if (!req.session.user) {
                return res.render("pages/forbidden")
            }
            const { name, lastname } = req.session.user
            const username = `${name.split(" ")[0]} ${lastname.split(" ")[0]}`

            const data = await interactionService.getInteractionsAndCreateInfo()
            const { interactions, drugsData, foodData, diseaseData } = data
            
            
            
            return res.render("interaction", { username, interactions, drugsData, foodData, diseaseData })
            
        } catch (error) {
            console.log(error);
            return res.render("pages/error")
        }
    }
}

module.exports = new InteractionController()