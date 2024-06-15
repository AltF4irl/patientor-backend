import patients from '../../data/patients';
import { NewEntry, NewPatient, Patient } from '../types';
import { v1 as uuid } from 'uuid';

const getPatients = (): Patient[] => {
  return patients;
};

const getPatientsWithoutSsn = (): Omit<Patient, 'ssn'>[] => {
  return patients.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries,
    })
  );
};

const getPatient = (id: string): Patient => {
  const returnedPatient = patients.find((patient) => patient.id === id);
  if (!returnedPatient) {
    throw new Error('patient not found');
  }
  return returnedPatient;
};

const addPatient = (patient: NewPatient): Patient => {
  const newEntry: Patient = {
    ...patient,
    id: uuid(),
  };
  patients.push(newEntry);
  return newEntry;
};

const addEntry = (id: string, entry: NewEntry): Patient => {
  const patient = getPatient(id);
  const entryWithId = {...entry, id: uuid()};
  patient.entries.push(entryWithId);
  return patient;
};

export default {
  getPatients,
  getPatientsWithoutSsn,
  addPatient,
  getPatient,
  addEntry,
};
