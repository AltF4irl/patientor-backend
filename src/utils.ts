import { Entry, Gender, NewPatient } from './types';

const isString = (str: unknown): str is string => {
  return typeof str === 'string' || str instanceof String;
};

const parseStr = (entry: unknown): string => {
  if (!isString(entry)) {
    throw new Error('Incorrect or missing field' + entry);
  }
  return entry;
};

const isDate = (str: string): boolean => {
  return Boolean(Date.parse(str));
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
  if (!isString(dateOfBirth) || !isDate(dateOfBirth)) {
    throw new Error('Incorrect or missing date Of Birth' + dateOfBirth);
  }
  return dateOfBirth;
};

const isGender = (str: string): str is Gender => {
  return Object.values(Gender)
    .map((value) => value.toString())
    .includes(str);
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or missing Gender' + gender);
  }
  return gender;
};

const toNewPatient = (entry: unknown): NewPatient => {
  if (typeof entry !== 'object' || !entry) {
    throw new Error('incorrect or missing data');
  }
  if (
    'name' in entry &&
    'dateOfBirth' in entry &&
    'ssn' in entry &&
    'gender' in entry &&
    'occupation' in entry
  ) {
    const newEntry: NewPatient = {
        name: parseStr(entry.name),
        dateOfBirth: parseDateOfBirth(entry.dateOfBirth),
        ssn: parseStr(entry.ssn),
        gender: parseGender(entry.gender),
        occupation: parseStr(entry.occupation),
        entries: [] as Entry[]
    };
    return newEntry;
  }
  throw new Error('Some fields are womp womp');
};

export default toNewPatient;