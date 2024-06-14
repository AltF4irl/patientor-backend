import express from 'express';
const router = express.Router();
import patientService from '../services/patientService';
import toNewPatient from '../utils';

router.get('/', (_req, res) => {
  res.json(patientService.getPatientsWithoutSsn());
});

router.get('/:id', (req, res) => {
  try {
    const pt = patientService.getPatient(req.params.id);
    console.log('patient from backed', pt);
    res.json(pt);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    }
  }
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
