const { user } = require("../models")
const { encrypt, compare } = require("../utils/cryptHelper")

class AuthService {

    loginUser = async(email, password) =>{
        try {
            const findedUser = await user.findOne({
                attributes: ['id', 'name', 'lastname', 'username', 'password', 'email', 'role'],
                where: {
                    email
                }
            });            
    
            if(findedUser){
                const hashPasword = findedUser.password
                const check = await compare(password, hashPasword)
                
                if(!check) return { status: 400, message:"Contraseña Incorrecta" }
                
                return { status: 200, message: `Bienvenido ${findedUser.name.split(" ")[0]}`, data: findedUser}
            }
            return { status: 400, message: "Usuario no encontrado", data: {}}
            
        } catch (error) {
            console.log("Error: " + error.message);
            throw error
        }
    }
}

module.exports = new AuthService()