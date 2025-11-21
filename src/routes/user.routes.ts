import { Router } from "express";
import userController from "../controllers/user.controller";

const userRoutes = Router()

userRoutes.post('/new-user', userController.addUser)
// userRoutes.get('/', userController.getUser)

export default userRoutes