import { Request, Response, NextFunction } from "express";

class NutrimentController {

    getNutriment(req:Request, res:Response) {
        try {
            res.render("nutriment")
        } catch (error:any) {
            console.log(`${error.message}`);
        }
    }
    
}
export default new NutrimentController()