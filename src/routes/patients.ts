/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from "express";
const router = express.Router();
import patientService from "../services/patientService";

router.get('/', (_req, res) => {
    res.json(patientService.getPatientsWithoutSsn());
});

router.post('/', (req, res) => {
    const newEntry = patientService.addPatient(req.body);
    res.json(newEntry);
});

export default router;