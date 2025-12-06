const patientRouter = require("express").Router()
const patientController = require("../controllers/patient.controller")
const { verifyAdmin } = require("../middlewares/auth.middleware")

// patientRouter.get("/", patientController.getPatientsByUser)
patientRouter.get("/", verifyAdmin, patientController.getPatients)
patientRouter.get("/user-patients", verifyAdmin,  patientController.getPatientsByUser)
patientRouter.get("/all", verifyAdmin, patientController.getAllPatients)
patientRouter.post("/add-new", verifyAdmin, patientController.addNewPatient)
patientRouter.put("/update-infop/:id", verifyAdmin, patientController.editInfoPatient)

module.exports =  patientRouter