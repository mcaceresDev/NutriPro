const pagesController = require("../controllers/pages.controller");
const { verifyAdmin } = require("../middlewares/auth.middleware");
const pageRouter = require("express").Router();

pageRouter.get("/users", verifyAdmin, pagesController.renderUserView)
pageRouter.get("/user-info", verifyAdmin, pagesController.renderUserView)

module.exports = pageRouter