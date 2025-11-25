const { user } = require("../models")

class UserService {

    createUser = async (payload) => {
        try {
            const response = await user.create(payload)
            console.log(response);
            
            return response

        } catch (error) {
            console.log(error);
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
