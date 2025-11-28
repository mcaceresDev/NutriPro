const userService = require("../services/user.service");
const { LogFormat, createLog, logType, errorType } = require("../utils/pinoLogger");
const { genericErrorHandler, errorPostHandler, sendSuccess, customError, badRequestResponse } = require("../validators/httpResponse");

class UserController {

    getUsers = async (req, res) => {
        
        try {
            const response = await userService.readUsers()
            // console.log(response);
            
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

    updateSelfPassword = async (req, res) => {
        try {
            const { password } = req.body;
            const { userId, username } = req.session.user
            
            if (!password) {
                res.status(400)
                return res.send({ status: 400, message: "Campo contraseña no enviado" })
            }

            const response = await userService.updateSelfPassword(userId, password)

            if (response === 0) {
                res.status(404)
                return res.json(customError(404, "Usuario no encontrado o sin cambios"));
            } else {
                const newLog = new LogFormat(
                    `Usuario ${username} ha cambiado su contraseña a "${password}"`,
                    logType.warning,
                    { ip: req.ip }
                )
                createLog(logType.warning, newLog, `Usuario ${username} ha cambiado su contraseña.`)

                return res.json(sendSuccess("Contraseña actualizada correctamente"))
            }

        } catch (error) {
            res.status(400)
            return res.send(genericErrorHandler(error))
        }
    }
}

module.exports = new UserController()