const userService = require("../services/user.service");
const { genericErrorHandler, errorPostHandler, sendSuccess, customError, badRequestResponse } = require("../validators/httpResponse");

class UserController {

    getUsers = async (req, res) => {
        
        try {
            const response = await userService.readUsers()
            console.log(response);
            
            return res.json(response)

        } catch (error) {
            console.log(error);
        }
    }

    addUser = async (req, res) => {
        const { name, lastname, username, email, password, gender } = req.body
        const payload = {
            name,
            lastname,
            username,
            email,
            password,
            gender
        }

        try {
            const response = await userService.createUser(payload)
            if (result) {
                const response = sendSuccess("Usuario creado exitosamente")
                return res.status(200).json(response)
            }

            res.status(400)
            return badRequestResponse

        } catch (error) {
            const errorData = errorPostHandler(error)
            return res.status(400).json(errorData)
        }
    }
}

module.exports = new UserController()