const politicsRouter = require("express").Router()
const politicsController = require("../controllers/politics.controller")


politicsRouter.get("/", politicsController.renderPoliticsView)

module.exports = politicsRouter
