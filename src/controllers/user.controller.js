const userService = require("../services/user.service")

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
            
            return res.json(response)

        } catch (error) {
            console.log(error);
            return res.json({message: "Error en el controlador"})
        }
    }
}

module.exports = new UserController()