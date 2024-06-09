import express from 'express';
import diagnosisService from '../services/dignosisService';

const router = express.Router();


router.get('/', (_req, res) => {
    res.json(diagnosisService.getDiagnoses());
});

export default router;