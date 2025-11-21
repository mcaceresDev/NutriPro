import apiRequest from "../api/request";
import { CreateUserBody } from "../models/interfaces/user.interface";
import axios from "axios";
import user from "../models/user";

const baseUrl = "http://localhost/users/new-user"
class UserService {

    createUser = async (payload: CreateUserBody) => {
        try {
            const response = await user.create(payload)

            console.log("================ RESPUESTA DESDE SERVICIO ================");
            console.log(response);
            
            return response

        } catch (error: any) {
            console.log(error);
            return {message: "Error en el servicio"}
        }
    }

    readUsers = async () => {
        try {

        } catch (error: any) {
            console.log(error);
        }
    }
}

export default new UserService()