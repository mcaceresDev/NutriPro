import { Router } from "express";
const router = Router();
import drugRouter from "./drug.routes";
import patientRouter from "./patient.routes";
import nutrimentRouter from "./nutriment.routes";

router.use("/pacientes", patientRouter)
router.use("/farmacos", drugRouter)
router.use("/nutrientes", nutrimentRouter)

export default router