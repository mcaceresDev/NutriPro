// const { User } = require("../models");
// const { encrypt, compare } = require("../utils/cryptHelper");

// class AuthService {

//     loginUser = async(username, password) =>{
//         try {
//             const findedUser = await User.findOne({
//                 attributes: ['id', 'username', 'password', 'role', 'providerId'],
//                 where: {
//                     username
//                 }
//             });
    
//             if(findedUser){
//                 const hashPasword = findedUser.password
//                 const check = await compare(password, hashPasword)
                
//                 if(!check) return { status: 400, message:"Contraseña Incorrecta" }
                
//                 return { status: 200, message: "", data: findedUser}
//             }
//             return { status: 200, message: "", data: findedUser}
            
//         } catch (error) {
//             console.log("Error: " + error.message);
//             throw error
//         }
//     }
// }

// module.exports = new AuthService()