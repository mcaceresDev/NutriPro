const evaluationRouter = require("express").Router()
// Controller
const evaluationController = require("../controllers/evaluation.controller");
const { verifyAdmin } = require("../middlewares/auth.middleware");


// Routes
evaluationRouter.get("/:id", verifyAdmin, evaluationController.renderEvaluationPage);

module.exports = evaluationRouter;
