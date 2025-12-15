const patientService = require("../services/patient.service");
const { calculateAge } = require("../utils/dateHelper");
const { errorPostHandler, genericErrorHandler, notFoundResponse, sendSuccess, badRequestResponse, customError } = require("../validators/httpResponse");

class PatientController {

    // Cargar datos y renderizar vista
    getPatients = async (req, res) => {
        try {

            if (!req.session.user) {
                return res.render("pages/forbidden")
            }
            const { userId } = req.session.user

            const patients = await patientService.readPatientsByUser(userId)

            return res.render("patient", { patients: patients.length > 0 ? patients : [] })
        } catch (error) {
            console.log(error);
            
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

            if (patients.length > 0) {
                // return res.render('users', { users: result, providers });
                return res.json({status:200, rows: patients})
            }
            res.status(404)
            return res.json(notFoundResponse)

        } catch (error) {
            return res.render("pages/error")
        }
    }
    
    getAllPatients = async (req, res) => {
        try {

            if (!req.session.user) {
                return res.render("pages/forbidden")
            }
            const { userId, name, lastname } = req.session.user
            const patients = await patientService.readAllPatients()

            if (patients.length > 0) {
                // return res.render('users', { users: result, providers });
                return res.json({status:200, rows: patients})
            }
            res.status(404)
            return res.json(notFoundResponse)

        } catch (error) {
            return res.render("pages/error")
        }
    }

    addNewPatient = async (req, res)=> {
        try {
            req.body.addedBy = req.session.user.userId
            
            req.body.age = calculateAge(req.body.birthdate)

            const newPatient = await patientService.createNewPatient(req.body)
            if (newPatient) {
                return res.json(sendSuccess("Registro creado con éxito"))
            }
            res.status(400).json(customError(400, "No se pudo crear el registro"))

        } catch (error) {
            console.log(error);
            
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