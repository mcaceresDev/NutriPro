import { CreateUserBody } from "../models/interfaces/user.interface";
import user from "../models/user";

class UserService {

    createUser = async (payload: CreateUserBody) => {
        try {
            const response = await user.create(payload)
            console.log(response);
            
            return response

        } catch (error: any) {
            console.log(error);
            return {message: "Error en el servicio"}
        }
    }

    readUsers = async () => {
        try {
            const response = await user.findAll()
            return response

        } catch (error: any) {
            console.log(error);
        }
    }
}

export default new UserService()