export type gender = 'male' | 'female' | 'other';

export type NewPatient = Omit<Patient, 'id'>;

export interface Diagnosis {
    code: string,
    name: string,
    latin?: string
}

export interface Patient {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: gender,
    occupation: string
}