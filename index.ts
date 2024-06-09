import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

const PORT: number = 3000;

app.get('/api/ping', (_req, res) => {
    res.send('Pong');
});

app.listen(PORT, () => {
  console.log(`Server up un running on port ${PORT}`);
});
