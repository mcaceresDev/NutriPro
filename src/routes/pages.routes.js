const pagesController = require("../controllers/pages.controller")
const pageRouter = require("express").Router();

pageRouter.get("/users", pagesController.renderUserView)

module.exports = pageRouter