const diseaseService = require("../services/disease.service")
const { genericErrorHandler, sendSuccess, notFoundResponse, errorPostHandler } = require("../validators/httpResponse")

class DiseaseController {

    getDiseaseView = async (req, res)=> {
        try {
            const allDiseases = await diseaseService.readAllForView()
            
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
    
    createDisease = async(req, res)=> {
            try {
    
                const newDisease = await diseaseService.createDisease(req.body)
                // console.log(req.body);
                
                if (newDisease) {
                    return res.json(sendSuccess("Registro creado con éxito"))
                }
                res.status(400).json(customError(400, "No se pudo crear el registro"))
                
            } catch (error) {
                const errorData=errorPostHandler(error)
                return res.status(400).json(errorData);
            }
        }

    editDisease = async(req, res)=> {
        try {
            const id = req.params.id
            const response = await diseaseService.updateDisease(req.body, id)

            if (response === 0) {
                res.status(404)
                return res.send(customError(404, "Elemento no encontrado o sin cambios"));
            } else {
                return res.send(sendSuccess("Registro actualizado"))
            }

        } catch (error) {
            const errorData=errorPostHandler(error)
            return res.status(400).json(errorData);
        }
    }

}

module.exports = new DiseaseController()