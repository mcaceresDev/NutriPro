const drugRouter = require("express").Router()
const drugController = require("../controllers/drug.controller")
const { verifyAdmin, verifyJairo } = require("../middlewares/auth.middleware")

drugRouter.get("/", verifyAdmin, drugController.getDrugsView)
drugRouter.get("/all", verifyAdmin, drugController.getDrugs)
drugRouter.post("/add-new", verifyAdmin, drugController.createDrug)
drugRouter.put("/update-infof/:id", verifyAdmin, drugController.editDrug)

module.exports =  drugRouter