const pagesController = require("../controllers/pages.controller");
const { verifyAdmin, verifySudo } = require("../middlewares/auth.middleware");
const pageRouter = require("express").Router();

pageRouter.get("/users", verifySudo, pagesController.renderUserView)
pageRouter.get("/user-info", verifySudo, pagesController.renderUserView)

module.exports = pageRouter