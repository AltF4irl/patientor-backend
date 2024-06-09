import { NewPatient } from "./types";

const isString = (str: unknown): str is string => {
    return typeof str === 'string' || str instanceof String;
};

const parseName = (name: unknown): string => {
    if (!isString(name)) {
        throw new Error('Incorrect or missing name' + name);
    }
    return name;
};