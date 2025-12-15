const userService = require("../services/user.service")

class PageController {

    renderUsersView = (req, res)=> {
        res.render("users")
    }
    
    renderUserView = async (req, res)=> {
        const { userId } = req.session.user
        const user = await userService.readUserInfo(userId)
        
        res.render("userinfo", { user: user[0] })
    }
}

module.exports = new PageController()