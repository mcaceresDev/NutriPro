const pagesController = require("../controllers/pages.controller")
const pageRouter = require("express").Router();

pageRouter.get("/users", pagesController.renderUserView)
pageRouter.get("/user-info", pagesController.renderUserView)

module.exports = pageRouter