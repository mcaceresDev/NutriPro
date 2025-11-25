const foodRouter = require("express").Router()
const foodController = require("../controllers/food.controller")

foodRouter.get("/", foodController.getFood)
foodRouter.get("/items-byuser", foodController.getFoodItemsByUser)
foodRouter.post("/add-new", foodController.addFoodItem)
foodRouter.put("/update-item", foodController.editFoodItem)

module.exports = foodRouter