import diagnoses from '../../data/diagnoses';
import { Diagnosis } from '../types';

const getDiagnoses = (): Diagnosis[] => {
  return diagnoses;
};

const getDiagnosisByCode = (code: string): Diagnosis => {
  const diagnosis = diagnoses.find((diagnosis) => diagnosis.code === code);
  if (diagnosis) {
    return diagnosis;
  } else {
    throw new Error('code doesnt exist');
  }
};

export default {
  getDiagnoses,
  getDiagnosisByCode,
};
