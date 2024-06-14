import express from 'express';
import diagnosisService from '../services/dignosisService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(diagnosisService.getDiagnoses());
});

router.get('/:code', (req, res) => {
  try {
    const diag = diagnosisService.getDiagnosisByCode(req.params.code);
    res.json(diag);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(404).json({ error: err.message });
    }
  }
});

export default router;
