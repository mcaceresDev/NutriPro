const diseaseService = require("../services/disease.service")
const { genericErrorHandler, sendSuccess, notFoundResponse } = require("../validators/httpResponse")

class DiseaseController {

    getDiseaseView = async (req, res)=> {
        try {
            const allDiseases = await diseaseService.readAll()
            
            res.render("disease", {diseases: allDiseases})
            
        } catch (error) {
            const errorData={status:400, message: error.message}
            return res.status(400).json(errorData);
        }
    }

    getAllDiseases = async (req, res)=> {
        try {
            const allDiseases = await diseaseService.readAll()
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