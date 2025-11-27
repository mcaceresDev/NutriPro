const foodService = require("../services/food.service");
const foodcategoryService = require("../services/foodcategory.service");
const { errorPostHandler, genericErrorHandler, notFoundResponse, sendSuccess, badRequestResponse, customError } = require("../validators/httpResponse");

class FoodController {

    getFood = async(req, res)=> {
        try {
            
            if (!req.session.user) {
                return res.render("pages/forbidden")
            }
            const { userId, name, lastname } = req.session.user
            const categories = await foodcategoryService.readFoodCategories()
            const food = await foodService.readFoodItemsByUser(userId)
            
            console.log(req.session.user);
            // console.log(typeof name);
            
            const username = `${name.split(" ")[0]} ${lastname.split(" ")[0]}`
            // const username = ``
            if (categories && categories.length > 0) {      
                return res.render("food", { categories, food: food.length > 0 ? food : [], username })
            }
            return res.render("food", { food: food.length > 0 ? food : [], username })
        } catch (error) {
            console.log("del render food")
            console.log(`${error.message}`);
            return
        }
    }
    
    getFoodItemsByUser = async (req, res)=> {
        try {
            const { userId } = req.session.user
            const response = await foodService.readFoodItemsByUser(userId)
            if (response.length > 0) {
                // return res.render('users', { users: result, providers });
                return res.json({status:200, rows: response})
            }
            res.status(404)
            return res.send(notFoundResponse)

        } catch (error) {
            const errorData = genericErrorHandler(error)
            return res.status(400).json(errorData)
        }
    }
    getAllFoodItems = async (req, res)=> {
        try {
            const response = await foodService.readAllFoodItems()
            if (response.length > 0) {
                // return res.render('users', { users: result, providers });
                return res.json({status:200, rows: response})
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
            req.body.addedBy = req.session.user.userId
            const newFood = await foodService.createFoodItem(req.body)
            const response = errorPostHandler(newFood)
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