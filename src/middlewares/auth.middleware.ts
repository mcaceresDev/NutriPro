// const { User } = require("../models")
// const { compare } = require("../utils/cryptHelper")
// const path = require('path');

// const adminRole = process.env.ADMIN_ACCOUNT_ROLE ? process.env.ADMIN_ACCOUNT_ROLE : "admin"

// const authMiddleware = async(req, res, next) =>{
//     const { username, password } = req.body

//     try {
//         if(!username || !password){
//             return res.send({ status: 400, title: "Error de credenciales", message: "Necesitas enviar tus credenciales de acceso" })
//         }
        
//         const logIn = await User.findOne({ where: { username } });
        
//         if (logIn) {
//             const hashPasword = logIn.password
//             const check = await compare(password, hashPasword)
            
//             if (!check){
//                 return res.send({ status: 400, message:"Contraseña Incorrecta" })
//             }

//             req.user = { remitente: logIn.remitente, username }
//             return next()
//         }

//         // console.log();        
//         return res.send({status: 400, message: "Error en la petición"})
        
//     } catch (error) {
//         console.log("Error: " + error);
//         return res.send({ status: 500, message: error.message })
//     }
// }

// const verifyAdminAccount = (req, res, next) => {
//     if (req.session.user && req.session.user.role === adminRole) {
//       return next();
//     }
//     return res.sendFile(path.join(__dirname, '../views/pages/forbiddenPage.html'))
// }

// module.exports = { authMiddleware, verifyAdminAccount }