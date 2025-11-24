const drugRouter = require("express").Router()
const drugController = require("../controllers/drug.controller")

drugRouter.get("/", drugController.getDrugs)

module.exports =  drugRouter