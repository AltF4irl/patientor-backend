import express from 'express';
import cors from 'cors';
import diagnosesRoute from './routes/diagnoses';
const app = express();
app.use(express.json());
app.use(cors());

const PORT: number = 3000;

app.use('/api/diagnoses', diagnosesRoute);

app.listen(PORT, () => {
  console.log(`Server up un running on port ${PORT}`);
});
