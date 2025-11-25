const { food } = require("../models")

class FoodService {

    createFoodItem = async (payload)=> {
        try {
            const response = await food.create(payload)
            return response

        } catch (error) {
            // return {message: "Error en el servicio"}
            throw error
        }
    }
    
    readFoodItemsByUser = async (userId)=> {
        try {
            const response = await food.findAll({
                where: {
                    addedBy: userId
                }
            })
            return response
        } catch (error) {
            // return {message: "Error en el servicio"}
            throw error
        }
    }

}

module.exports = new FoodService()