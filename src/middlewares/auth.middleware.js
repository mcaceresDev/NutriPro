const { user } = require("../models")
const { compare } = require("../utils/cryptHelper")
const path = require('path');

// const adminRole = process.env.ADMIN_ACCOUNT_ROLE ? process.env.ADMIN_ACCOUNT_ROLE : "admin"

const authMiddleware = async(req, res, next) =>{
    const { email, password } = req.body

    try {
        if(!email || !password){
            return res.send({ status: 400, title: "Error de credenciales", message: "Necesitas enviar tus credenciales de acceso" })
        }
        
        const logIn = await user.findOne({ where: { email } });
        
        if (logIn) {
            const hashPasword = logIn.password
            const check = await compare(password, hashPasword)
            
            if (!check){
                return res.send({ status: 400, message:"Contraseña Incorrecta" })
            }

            req.user = { userId: logIn.id , email }
            return next()
        }

        // console.log();        
        return res.send({status: 400, message: "Error en la petición"})
        
    } catch (error) {
        console.log("Error: " + error);
        return res.send({ status: 500, message: error.message })
    }
}

const verifyAdminAccount = (req, res, next) => {
    if (req.session.user) {
      return next();
    }
    // return res.sendFile(path.join(__dirname, '../views/pages/forbiddenPage.html'))
    return res.json({status: 500, message: "ERROR"})
}

module.exports = { authMiddleware, verifyAdminAccount }