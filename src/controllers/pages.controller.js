const userService = require("../services/user.service")

class PageController {

    renderUserView = (req, res)=> {
        res.render("users")
    }
    
    renderUserView = async (req, res)=> {
        const { userId, name, lastname } = req.session.user
        const user = await userService.readUserInfo(userId)
        
        const username = `${name.split(" ")[0]} ${lastname.split(" ")[0]}`
        res.render("userinfo", { username, user: user[0] })
    }
}

module.exports = new PageController()