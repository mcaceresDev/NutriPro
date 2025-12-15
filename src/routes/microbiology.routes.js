const microbiologyRouter = require("express").Router()
const microbiologyController = require("../controllers/microbiology.controller")

microbiologyRouter.get("/", microbiologyController.renderMicrobiologyView)

module.exports = microbiologyRouter