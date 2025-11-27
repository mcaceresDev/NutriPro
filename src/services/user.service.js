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
    
    readUserInfo = async (userId) => {
        try {
            const response = await user.findAll({
                where: {
                    id: userId
                }
            })
            return response

        } catch (error) {
            console.log(error);
        }
    }

    updateSelfPassword = async(id, password) =>{
        try {
            const cryptPassword = await encrypt(password)
    
            console.log(cryptPassword);
            
            const [updatedRows] = await user.update(
                { password: cryptPassword },
                { where: { id } }
            );
            
            console.log("respuesta del servicio: " + updatedRows);
            return updatedRows
    
    
        } catch (error) {
            console.log("Error: " + error.message);
            throw error
        }
    }
}

module.exports = new UserService()
