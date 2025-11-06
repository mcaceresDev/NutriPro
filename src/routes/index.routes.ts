import { Router } from "express";
const router = Router();
import patientController from "../controllers/patient.controller";

router.get("/patients", patientController.getPatients)

export default router