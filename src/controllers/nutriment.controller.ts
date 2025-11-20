import { Request, Response, NextFunction } from "express";

class FoodController {

    getFood(req:Request, res:Response) {
        try {
            res.render("food")
        } catch (error:any) {
            console.log(`${error.message}`);
        }
    }
    
}
export default new FoodController()