import { Request, Response, NextFunction } from "express";

class PatientController {

    getPatients(req:Request, res:Response) {
        try {
            res.render("patients")
        } catch (error:any) {
            console.log(`${error.message}`);
        }
    }
}
export default new PatientController()