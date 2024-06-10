import express from 'express';
const router = express.Router();
import patientService from '../services/patientService';
import toNewPatient from '../utils';

router.get('/', (_req, res) => {
  res.json(patientService.getPatientsWithoutSsn());
});

router.post('/', (req, res) => {
  try {
    const newEntry = patientService.addPatient(toNewPatient(req.body));
    res.json(newEntry);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    }
  }
});

export default router;
