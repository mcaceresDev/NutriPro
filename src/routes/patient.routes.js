const patientRouter = require("express").Router()
const patientController = require("../controllers/patient.controller")

patientRouter.get("/", patientController.getPatients)

module.exports =  patientRouter