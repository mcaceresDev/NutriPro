const diseaseService = require("../services/disease.service")
const { genericErrorHandler, sendSuccess, notFoundResponse } = require("../validators/httpResponse")

class DiseaseController {

    getDiseaseView = async (req, res)=> {
        try {
            res.render("disease")
        } catch (error) {
            
        }
    }

    getAllDiseases = async (req, res)=> {
        try {
            const allDiseases = diseaseService.readAll()
            if (allDiseases.length > 0) {
                return res.status(200).json({message: "", rows: allDiseases})
            }
            return res.status(404).json(notFoundResponse)

        } catch (error) {
            const errorData = genericErrorHandler(error)
            return res.status(500).json(errorData)
        }
    }
    // getAllDiseases = async (req, res)=> {
    //     try {
            
    //     } catch (error) {
            // const errorData = genericErrorHandler(error)
            // return res.status(500).json(errorData
    //     }
    // }
    // getAllDiseases = async (req, res)=> {
    //     try {
            
    //     } catch (error) {
            // const errorData = genericErrorHandler(error)
            // return res.status(500).json(errorData
    //     }
    // }

}

module.exports = new DiseaseController()