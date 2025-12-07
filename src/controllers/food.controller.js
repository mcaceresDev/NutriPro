const foodService = require("../services/food.service");
const foodcategoryService = require("../services/foodcategory.service");
const { errorPostHandler, genericErrorHandler, notFoundResponse, sendSuccess, badRequestResponse, customError } = require("../validators/httpResponse");
const { LogFormat, createLog, logType, errorType } = require("../utils/pinoLogger");

// INFORMACION SOBRE ALIMENTOS
const fs = require("fs");
const path = require("path");
// const jairo = require("../DatosAlimentos/jairo.json")

class FoodController {

    getFood = async(req, res)=> {
        try {
            
            if (!req.session.user) {
                return res.render("pages/forbidden")
            }
            const { userId, name, lastname } = req.session.user

            const categories = await foodcategoryService.readFoodCategories()
            const food = await foodService.readFoodItemsByUser(userId)
            
            const username = `${name.split(" ")[0]} ${lastname.split(" ")[0]}`
            
            if (categories && categories.length > 0) {      
                return res.render("food", { categories, food: food.length > 0 ? food : [], username })
            }
            return res.render("food", { food: food.length > 0 ? food : [], username })
        } catch (error) {
            return res.render("pages/error")
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
            return res.json(notFoundResponse)

        } catch (error) {
            const errorData = genericErrorHandler(error)
            return res.status(400).json(errorData)
        }
    }
    
    getFoodItemsByUserNoLogged = async (req, res)=> {
        try {
            const { userId } = req.params
            
            const response = await foodService.readFoodItemsByUser(userId)
            if (response.length > 0) {
                // return res.render('users', { users: result, providers });
                return res.json({status:200, message:`Elementos guardados: ${response.length}`, rows: response})
            }
            res.status(404)
            return res.json(notFoundResponse)

        } catch (error) {
            console.log(error);
            
            const errorData = genericErrorHandler(error)
            return res.status(400).json(errorData)
        }
    }
    getAllFoodItems = async (req, res)=> {
        try {
            const response = await foodService.readAllFoodItems()
            if (response.length > 0) {
                // return res.render('users', { users: result, providers });
                return res.json({status:200, message:`Elementos guardados: ${response.length}`, rows: response})
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
            const { username } = req.session.user

            const newFood = await foodService.createFoodItem(req.body)
            if (newFood) {
                const newLog = new LogFormat(
                    `Usuario ${username} ha agregado un nuevo alimento. "${req.body.name}"`,
                    logType.info,
                    { ip: req.ip }
                )
                createLog(logType.info, newLog, `Usuario ${username} ha agregado un nuevo alimento. "${req.body.name}"`)
                return res.json(sendSuccess("Registro creado con éxito"))
            }
            res.status(400).json(customError(400, "No se pudo crear el registro"))

        } catch (error) {
            const errorData = errorPostHandler(error)
            return res.status(400).json(errorData)
        }
    }
    
    bulkCreate = async (req, res)=> {
        try {

            const filePath = path.join(__dirname, '..', 'DatosAlimentos', 'giovani.json');
            const payload = fs.readFileSync(filePath, 'utf-8');
            const data = JSON.parse(payload);
            
            const newFood = await foodService.createBulkItems(data.rows)
            if (newFood) {
                return res.json(sendSuccess("Registro creado con éxito"))
            }
            res.status(400).json(customError(400, "No se pudo crear el registro"))

        } catch (error) {
            console.log(error);
            
            const errorData = errorPostHandler(error)
            return res.status(400).json(errorData)
        }
    }

    editFoodItem = async (req, res) => {
        try {
            const id = req.params.id
            const { username } = req.session.user
            const response = await foodService.updateFoodItem(req.body, id)
            
            if (response === 0) {
                res.status(404)
                return res.send(customError(404, "Elemento no encontrado o sin cambios"));
            } else {
                const newLog = new LogFormat(
                    `Usuario ${username} ha actualizado un alimento. "${id} - ${req.body.name}"`,
                    logType.warning,
                    { ip: req.ip }
                )
                createLog(logType.warning, newLog, `Usuario ${username} ha actualizado un alimento. "${id} - ${req.body.name}"`)
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