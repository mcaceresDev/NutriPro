
const foodcategoryService = require("../services/foodcategory.service");
const { errorPostHandler, genericErrorHandler, notFoundResponse, sendSuccess, badRequestResponse, customError } = require("../validators/httpResponse");

class FoodCategoryController {

    getFoodCategories = async (req, res) => {
        try {
            const response = await foodcategoryService.readFoodCategories()
            if (response.length > 0) {
                // return res.render('users', { users: result, providers });
                return res.json(response)
            }
            res.status(404)
            return res.send(notFoundResponse)

        } catch (error) {
            const errorData = genericErrorHandler(error)
            return res.status(400).json(errorData)
        }
    }

}

module.exports = new FoodCategoryController()