const foodService = require("../services/food.service");
const foodcategoryService = require("../services/foodcategory.service");
const { errorPostHandler, genericErrorHandler, notFoundResponse, sendSuccess, badRequestResponse, customError } = require("../validators/httpResponse");

class FoodController {

    getFood(req, res) {
        try {
            const categories = foodcategoryService.readFoodCategories()
            res.render("food")
        } catch (error) {
            console.log(`${error.message}`);
            return
        }
    }
    
    getFoodItemsByUser = async (req, res)=> {
        try {
            const response = await foodService.readFoodItemsByUser(1)
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
    
    addFoodItem = async (req, res)=> {
        try {
            const response = await foodService.createFoodItem(req.body)
            return res.json(response)

        } catch (error) {
            const errorData = errorPostHandler(error)
            return res.status(400).json(errorData)
        }
    }

    editFoodItem = async (req, res) => {
        try {
            
            // const { username, role } = req.body;
            // const id = req.params.id

            // if (!username || !role) {
            //     res.status(400)
            //     return res.send(badRequestResponse)
            // }
            // const response = await userService.updateUser(id, username, role)

            if (response === 0) {
                res.status(404)
                return res.send(customError(404, "Usuario no encontrado o sin cambios"));
            } else {
                return res.send(sendSuccess("Registro actualizado"))
            }

        } catch (error) {
            const errorData = genericErrorHandler(error)
            return res.status(400).json(errorData)
        }
    }
    
    // deleteFoodItem = async (req, res) => {
    //     try {
            
    //     } catch (error) {
            
    //     }
    // }
    
}

module.exports = new FoodController()