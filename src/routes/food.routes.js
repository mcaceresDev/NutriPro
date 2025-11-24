const foodRouter = require("express").Router()
const foodController = require("../controllers/food.controller")

foodRouter.get("/", foodController.getFood)

module.exports = foodRouter