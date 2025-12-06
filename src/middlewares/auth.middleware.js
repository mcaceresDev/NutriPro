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

const verifyAdmin = (req, res, next) => {
    if (req.session.user) {
        // console.log(req.session.user.role);
        
        if (req.session.user.role === 'admin' || req.session.user.role === 'superadmin') {
            return next();
        }
    }
    // return res.sendFile(path.join(__dirname, '../views/pages/forbiddenPage.html'))
    return res.render("pages/forbidden")
}
const verifyJairo = (req, res, next) => {
    if (req.session.user) {
        if (req.session.user.role === 'special' || req.session.user.role === 'superadmin') {
            return next();
        }
    }
    // return res.sendFile(path.join(__dirname, '../views/pages/forbiddenPage.html'))
    return res.render("pages/forbidden")
}



module.exports = { authMiddleware, verifyAdminAccount, verifyAdmin, verifyJairo }