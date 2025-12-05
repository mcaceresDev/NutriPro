const drugService = require("../services/drug.service");
const { sendSuccess, errorPostHandler, genericErrorHandler, customError, notFoundResponse } = require("../validators/httpResponse");

class DrugController {

    getDrugsView = async(req, res)=> {
        try {
            const drugsAndComData = await drugService.readDrugsAndCreateInfo()
            const { drugsData, presentationData, pharmaGroupData } = drugsAndComData
            
            const drugs = drugsData.length > 0 ? drugsData : []
            const presentations = presentationData && presentationData.length > 0 ? presentationData : []
            const pharmagroups = pharmaGroupData && pharmaGroupData.length > 0 ? pharmaGroupData : []

            res.render("drugs", { drugs, presentations, pharmagroups })

        } catch (error) {
            const errorData={status:400, message: error.message}
            return res.status(400).json(errorData);
        }
    }
    
    getDrugs = async(req, res)=> {
        try {
            const drugsData = await drugService.readDrugs()
            if (drugsData.length && drugsData.length > 0) {
                return res.status(200).json({status: 200, rows: drugsData})
            }
            return res.status(400).json(notFoundResponse)
            
        } catch (error) {
            const errorData=genericErrorHandler(error)
            return res.status(400).json(errorData);
        }
    }

    createDrug = async(req, res)=> {
        try {
            req.body.addedBy = req.session.user.userId

            const newDrug = await drugService.createDrug(req.body)
            console.log(req.body);
            
            if (newDrug) {
                return res.json(sendSuccess("Registro creado con éxito"))
            }
            res.status(400).json(customError(400, "No se pudo crear el registro"))
            
        } catch (error) {
            console.log(error);
            
            const errorData=errorPostHandler(error)
            return res.status(400).json(errorData);
        }
    }

    editDrug = async(req, res)=> {
        try {
            const id = req.params.id
            const response = await drugService.updateDrug(req.body, id)

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

module.exports = new DrugController()