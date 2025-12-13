const diseaseRoutes = require("express").Router()
const diseaseController = require("../controllers/disease.controller")

diseaseRoutes.get("/", diseaseController.getDiseaseView)
diseaseRoutes.get("/all", diseaseController.getAllDiseases)
diseaseRoutes.post("/add-new", diseaseController.createDisease)
diseaseRoutes.put("/update-infod/:id", diseaseController.editDisease)

module.exports = diseaseRoutes