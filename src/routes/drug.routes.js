const drugRouter = require("express").Router()
const drugController = require("../controllers/drug.controller")

drugRouter.get("/", drugController.getDrugsView)
drugRouter.get("/all", drugController.getDrugs)
drugRouter.post("/add-new", drugController.createDrug)
drugRouter.put("/update-infof/:id", drugController.editDrug)

module.exports =  drugRouter