const patientRouter = require("express").Router()
const patientController = require("../controllers/patient.controller")

// patientRouter.get("/", patientController.getPatientsByUser)
patientRouter.get("/",  patientController.getPatients)
patientRouter.get("/user-patients",  patientController.getPatientsByUser)
patientRouter.get("/all",  patientController.getAllPatients)
patientRouter.post("/add-new",  patientController.addNewPatient)
patientRouter.put("/update-infop/:id",  patientController.editInfoPatient)

module.exports =  patientRouter