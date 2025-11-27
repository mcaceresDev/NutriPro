const path = require("path")
const { loginUser } = require("../services/auth.service")
const { customError, genericErrorHandler } = require("../validators/httpResponse")

class AuthController {

    
    login = async (req, res)=>{
        try {

            const { email, password } = req.body
            const response = await loginUser(email, password)

            if (response.status == 200) {
                // console.log(response);
                
                const { id, name, lastname, username, email } = response.data
                req.session.user = {
                    userId: id,
                    name,
                    lastname,
                    username,
                    email
                };
                // return res.sendFile(path.join(__dirname, '../public/views/index.html'))
                // return res.redirect('/nutrientes')
                return res.json(response)
            }

            return res.status(400).json(response)
            
        } catch (error) {
           const errorData = genericErrorHandler(error)
           return res.status(errorData.status).json(errorData)
        }
    }

    logOut = async (req, res)=>{
        try {

            req.session.destroy(err => {
                if (err) return res.status(500).json({status: 500, message: "Error al cerrar sesion"})
                return res.redirect('/');
            });
            
        } catch (error) {
            res.send("ERROR")
        }
    }

}

module.exports = new AuthController()