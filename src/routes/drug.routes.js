const drugRouter = require("express").Router()
const drugController = require("../controllers/drug.controller")

drugRouter.get("/", drugController.getDrugsView)
drugRouter.get("/all", drugController.getDrugs)
drugRouter.get("/add-new", drugController.createDrug)
drugRouter.get("/edit/:id", drugController.editDrug)

module.exports =  drugRouter