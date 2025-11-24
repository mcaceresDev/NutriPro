
class PageController {

    renderUserView = (req, res)=> {
        res.render("users")
    }
}

module.exports = new PageController()