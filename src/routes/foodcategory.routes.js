const foodCategoryRouter = require("express").Router()
const foodcategoryController = require("../controllers/foodcategory.controller")
const { verifyAdmin } = require("../middlewares/auth.middleware")

foodCategoryRouter.get("/", verifyAdmin, foodcategoryController.getFoodCategories)

module.exports = foodCategoryRouter