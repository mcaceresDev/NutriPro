const patientService = require("../services/patient.service");
const { errorPostHandler, genericErrorHandler, notFoundResponse, sendSuccess, badRequestResponse, customError } = require("../validators/httpResponse");

class PatientController {

    getPatients = async (req, res) => {
        try {

            if (!req.session.user) {
                return res.render("pages/forbidden")
            }
            const { name, lastname } = req.session.user

            const patients = await patientService.readAllPatients()
            const username = `${name.split(" ")[0]} ${lastname.split(" ")[0]}`

            return res.render("patient", { patients: patients.length > 0 ? patients : [], username })
        } catch (error) {
            return res.render("pages/error")
        }
    }
    
    getPatientsByUser = async (req, res) => {
        try {

            if (!req.session.user) {
                return res.render("pages/forbidden")
            }
            const { userId, name, lastname } = req.session.user
            const patients = await patientService.readPatientsByUser(userId)

            const username = `${name.split(" ")[0]} ${lastname.split(" ")[0]}`

            return res.render("patient", { patients: patients.length > 0 ? patients : [], username })
        } catch (error) {
            return res.render("pages/error")
        }
    }

    addNewPatient = async (req, res)=> {
        try {
            req.body.addedBy = req.session.user.userId

            const newPatient = await patientService.createNewPatient(req.body)
            if (newPatient) {
                return res.json(sendSuccess("Registro creado con éxito"))
            }
            res.status(400).json(customError(400, "No se pudo crear el registro"))

        } catch (error) {
            const errorData = errorPostHandler(error)
            return res.status(400).json(errorData)
        }
    }

    editInfoPatient = async (req, res) => {
        try {
            const id = req.params.id
            const response = await patientService.updatePatientInfo(req.body, id)
            
            if (response === 0) {
                res.status(404)
                return res.send(customError(404, "Elemento no encontrado o sin cambios"));
            } else {
                return res.send(sendSuccess("Registro actualizado"))
            }

        } catch (error) {            
            const errorData = genericErrorHandler(error)
            return res.status(400).json(errorData)
        }
    }
}
module.exports = new PatientController()