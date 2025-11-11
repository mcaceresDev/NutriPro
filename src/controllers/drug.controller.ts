import { Request, Response, NextFunction } from "express";

class DrugController {

    getDrugs(req:Request, res:Response) {
        try {
            res.render("drugs", { btnText: "Agregar fármaco" })
        } catch (error:any) {
            console.log(`${error.message}`);
        }
    }
}
export default new DrugController()