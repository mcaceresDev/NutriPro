const drugRouter = require("express").Router()
const drugController = require("../controllers/drug.controller")
const { verifyAdmin, verifyJairo } = require("../middlewares/auth.middleware")

drugRouter.get("/", verifyJairo, drugController.getDrugsView)
drugRouter.get("/all", verifyJairo, drugController.getDrugs)
drugRouter.post("/add-new", verifyJairo, drugController.createDrug)
drugRouter.put("/update-infof/:id", verifyJairo, drugController.editDrug)

module.exports =  drugRouter