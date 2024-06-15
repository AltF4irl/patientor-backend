import express from 'express';
const router = express.Router();
import patientService from '../services/patientService';
import toNewPatient from '../utils';
import { Entry, Patient } from '../types';

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

router.post('/:id/entries', (req, res) => {
  const entry = req.body as Entry;
  if (!entry.type || !entry.date || !entry.description || !entry.id || !entry.specialist) {
    console.log(1);
    res.status(400).json({error: "missing information"});
  }
  switch (entry.type) {
    case ('HealthCheck'): {
      if(typeof entry.healthCheckRating === 'undefined') {
        console.log(2);
        return res.status(400).json({error: "missing information"});
      }
      break;
    }
    case ('Hospital'): {
      if(!entry.discharge) {
        console.log(3);
        return res.status(400).json({error: "missing information"});
      }
      break;
    }
    case ('OccupationalHealthcare'): {
      if(!entry.employerName) {
        console.log(4);
        return res.status(400).json({error: "missing information"});
      }
      break;
    }
    default:
      console.log(5);
      parseNever(entry);
      return res.status(400).json({error: "Bad type"});
  }
  
  const patient: Patient = patientService.addEntry(req.params.id, entry);
  return res.json(patient);
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

const parseNever = (value: never): never => {
  throw new Error(`Did not exhaust the type ${value}`);
};

export default router;
