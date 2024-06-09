import express from 'express';
const app = express();
app.use(express.json());

const PORT: number = 3000;

app.get('/ping', (_req, res) => {
    res.send('Pong');
});

app.listen(PORT, () => {
  console.log(`Server up un running on port ${PORT}`);
});
