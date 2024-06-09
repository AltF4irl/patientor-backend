import express from 'express';
import cors from 'cors';
import patientsRoute from './routes/patients';
import diagnosesRoute from './routes/diagnoses';

const app = express();
app.use(express.json());
app.use(cors());

const PORT: number = 3000;

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.use('/api/diagnoses', diagnosesRoute);
app.use('/api/patients', patientsRoute);

app.listen(PORT, () => {
  console.log(`Server up un running on port ${PORT}`);
});
