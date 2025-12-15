const interactionService = require("../services/interaction.service")
const { notFoundResponse, errorPostHandler, sendSuccess } = require("../validators/httpResponse")

class InteractionController {

    getInteractionsView = async(req, res)=> {
        try {

            if (!req.session.user) {
                return res.render("pages/forbidden")
            }

            const data = await interactionService.getInteractionsAndCreateInfo()
            const { interactions, drugsData, foodData, diseaseData } = data
            
            
            
            return res.render("interaction", { interactions, drugsData, foodData, diseaseData })
            
        } catch (error) {
            console.log(error);
            return res.render("pages/error")
        }
    }

    getInteractions = async(req, res)=> {
        try {

            if (!req.session.user) {
                return res.render("pages/forbidden")
            }

            const response = await interactionService.getAllInteractions()
            if (response.length > 0) {
                return res.json({status:200, rows: response})
            }
            res.status(404)
            return res.json(notFoundResponse)            
            
            
        } catch (error) {
            // console.log(error);
            return res.render("pages/error")
        }
    }
    
    createInteraction = async(req, res)=> {
        try {

            if (!req.session.user) {
                return res.render("pages/forbidden")
            }

            const response = await interactionService.createInteraction(req.body)
            if (response) {
                return res.json(sendSuccess("Registro creado con éxito"))
            }
            res.status(400).json(customError(400, "No se pudo crear el registro"))
            
        } catch (error) {
            console.log(error);
            
            const errorData = errorPostHandler(error)
            return res.status(400).json(errorData)
        }
    }
}

module.exports = new InteractionController()