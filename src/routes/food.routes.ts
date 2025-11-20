import { Router } from "express";
const foodRouter = Router();
import foodController from "../controllers/nutriment.controller";

foodRouter.get("/", foodController.getFood)

export default foodRouter