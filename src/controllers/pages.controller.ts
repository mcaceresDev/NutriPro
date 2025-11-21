import { Request, Response } from "express"

class PageController {

    renderUserView = (req:Request, res:Response)=> {
        res.render("users")
    }
}

export default new PageController()