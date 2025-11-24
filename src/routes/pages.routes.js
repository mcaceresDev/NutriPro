const pagesController = require("../controllers/pages.controller")
const pageRouter = Router();

pageRouter.get("/users", pagesController.renderUserView)

module.exports = pageRouter