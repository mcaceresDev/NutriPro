const { foodcategory } = require("../models")

class FoodCategoryService {

    readFoodCategories = async() => {
        try {
            const response = await foodcategory.findAll()
            return response
        
        } catch (error) {
            throw error
        }
    }
}

module.exports =  new FoodCategoryService()