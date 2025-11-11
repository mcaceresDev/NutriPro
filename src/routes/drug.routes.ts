import { Router } from "express";
const drugRouter = Router();
import drugController from "../controllers/drug.controller";

drugRouter.get("/", drugController.getDrugs)

export default drugRouter