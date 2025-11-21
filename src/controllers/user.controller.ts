import { Request, Response } from "express";
import userService from "../services/user.service";
import { CreateUserBody } from "../models/interfaces/user.interface";

class UserController {

    getUsers = async (req: Request, res: Response) => {
        
        try {
            const response = await userService.readUsers()
            console.log(response);
            
            return res.json(response)

        } catch (error: any) {
            console.log(error);
        }
    }

    addUser = async (req: Request, res: Response) => {
        const { name, lastname, username, email, password, gender } = req.body
        const payload:CreateUserBody = {
            name,
            lastname,
            username,
            email,
            password,
            gender
        }

        try {
            console.log("================ ENTRO AL CONTROLADOR ================");
            const response = await userService.createUser(payload)
            
            return res.json(response)

        } catch (error: any) {
            console.log(error);
            return res.json({message: "Error en el controlador"})
        }
    }
}

export default new UserController()