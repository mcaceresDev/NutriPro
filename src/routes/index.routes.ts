import { Router } from "express";
import drugRouter from "./drug.routes";
import patientRouter from "./patient.routes";
import foodRouter from "./food.routes";
import userRoutes from "./user.routes";
const router = Router();

router.use("/pacientes", patientRouter)
router.use("/farmacos", drugRouter)
router.use("/nutrientes", foodRouter)
router.use("/users", userRoutes)

export default router