import { Router } from "express";
const patientRouter = Router();
import patientController from "../controllers/patient.controller";

patientRouter.get("/", patientController.getPatients)

export default patientRouter