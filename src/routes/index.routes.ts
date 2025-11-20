import { Router } from "express";
const router = Router();
import drugRouter from "./drug.routes";
import patientRouter from "./patient.routes";
import foodRouter from "./food.routes";

router.use("/pacientes", patientRouter)
router.use("/farmacos", drugRouter)
router.use("/nutrientes", foodRouter)

export default router