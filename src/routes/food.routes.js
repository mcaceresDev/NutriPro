const foodRouter = require("express").Router()
const foodController = require("../controllers/food.controller")
const { authMiddleware } = require("../middlewares/auth.middleware")

foodRouter.get("/",  foodController.getFood)
foodRouter.get("/items-byuser",  foodController.getFoodItemsByUser)
foodRouter.get("/all",  foodController.getAllFoodItems)
foodRouter.post("/add-new",  foodController.addFoodItem)
foodRouter.put("/update-item",  foodController.editFoodItem)

module.exports = foodRouter