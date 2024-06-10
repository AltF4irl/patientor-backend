import patients from '../../data/patients';
import { NewPatient, Patient } from '../types';
import { v1 as uuid } from 'uuid';

const getPatients = (): Patient[] => {
  return patients;
};

const getPatientsWithoutSsn = (): Omit<Patient, 'ssn'>[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};


const addPatient = (patient: NewPatient): Patient => {
    const newEntry: Patient = {
        ...patient,
        id: uuid()
    };
    patients.push(newEntry);
    return newEntry;
};

export default {
  getPatients,
  getPatientsWithoutSsn,
  addPatient
};
