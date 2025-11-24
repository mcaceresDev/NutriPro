// import { Request, Response, NextFunction } from "express";
// import user from "../models/user";
// import { compare } from "../utils/cryptHelper";
// import path from "path";

// const adminRole = process.env.ADMIN_ACCOUNT_ROLE ? process.env.ADMIN_ACCOUNT_ROLE : "admin"

// export const authMiddleware = async(req:Request, res:Response, next:NextFunction) =>{
//     const { username, password } = req.body

//     try {
//         if(!username || !password){
//             return res.send({ status: 400, title: "Error de credenciales", message: "Necesitas enviar tus credenciales de acceso" })
//         }
        
//         const logIn = await user.findOne({ where: { username } });
        
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

// export const verifyAdminAccount = (req:Request, res:Response, next:NextFunction) => {
//     if (req.session.user && req.session.user.role === adminRole) {
//       return next();
//     }
//     return res.sendFile(path.join(__dirname, '../views/pages/forbiddenPage.html'))
// }

