import { Router } from "express";
const nutrimentRouter = Router();
import nutrimentController from "../controllers/nutriment.controller";

nutrimentRouter.get("/", nutrimentController.getNutriment)

export default nutrimentRouter