import user from "../models/user";
import { encrypt, compare } from "../utils/cryptHelper";

class AuthService {

    loginUser = async(email:string, password:string) =>{
        try {
            const findedUser = await user.findOne({
                attributes: ['id', 'username', 'password', 'email'],
                where: {
                    email
                }
            });
    
            if(findedUser){
                const hashPasword = findedUser.password
                const check = await compare(password, hashPasword)
                
                if(!check) return { status: 400, message:"Contraseña Incorrecta" }
                
                return { status: 200, message: "", data: findedUser}
            }
            return { status: 200, message: "", data: findedUser}
            
        } catch (error:any) {
            console.log("Error: " + error.message);
            throw error
        }
    }
}

module.exports = new AuthService()