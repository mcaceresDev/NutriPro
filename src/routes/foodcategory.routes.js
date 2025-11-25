const foodCategoryRouter = require("express").Router()
const foodcategoryController = require("../controllers/foodcategory.controller")

foodCategoryRouter.get("/", foodcategoryController.getFoodCategories)

module.exports = foodCategoryRouter