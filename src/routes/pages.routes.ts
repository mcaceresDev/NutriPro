import { Router } from "express";
import pagesController from "../controllers/pages.controller";
const pageRouter = Router();

pageRouter.get("/users", pagesController.renderUserView)

export default pageRouter