const diseaseRoutes = require("express").Router()
const diseaseController = require("../controllers/disease.controller")

diseaseRoutes.get("/all", diseaseController.getAllDiseases)

module.exports = diseaseRoutes