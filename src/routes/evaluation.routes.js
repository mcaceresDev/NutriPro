const evaluationRouter = require("express").Router()
// Controller
const evaluationController = require("../controllers/evaluation.controller");


// Routes
evaluationRouter.get("/:id", evaluationController.renderEvaluationPage);

module.exports = evaluationRouter;
