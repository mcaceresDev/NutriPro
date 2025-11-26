const { user } = require("../models")
const { encrypt } = require("../utils/cryptHelper")

class UserService {

    createUser = async (payload) => {
        try {
            const cryptPassword = await encrypt(payload.password)
            payload.password=cryptPassword
            
            const response = await user.create(payload)
            return response

        } catch (error) {
            // console.log(error);
            return {message: "Error en el servicio"}
        }
    }

    readUsers = async () => {
        try {
            const response = await user.findAll()
            return response

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UserService()
