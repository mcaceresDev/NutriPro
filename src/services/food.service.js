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
    
    readAllFoodItems = async ()=> {
        try {
            const response = await food.findAll()
            return response
        } catch (error) {
            // return {message: "Error en el servicio"}
            throw error
        }
    }
    
    updateFoodItem = async (payload, id)=> {
        try {
            const [updatedRows] = await food.update(
                payload,
                { where: { id } }
            );
            return updatedRows
                
        } catch (error) {
            // return {message: "Error en el servicio"}
            throw error
        }
    }

}

module.exports = new FoodService()