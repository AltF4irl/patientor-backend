import express from 'express';
const router = express.Router();
import patientService from '../services/patientService';
import toNewPatient from '../utils';
import patients from '../../data/patients';

router.get('/', (_req, res) => {
  res.json(patientService.getPatientsWithoutSsn());
});

router.get('/:id', (req, res) => {
  const pt = patients.find(patient => patient.id === req.params.id);
  res.json(pt);
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
