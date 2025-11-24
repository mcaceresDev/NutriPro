
class FoodController {

    getFood(req, res) {
        try {
            res.render("food")
        } catch (error) {
            console.log(`${error.message}`);
        }
    }
    
}

module.exports = new FoodController()