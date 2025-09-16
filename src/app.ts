import express, { Application } from 'express';

const app: Application = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Expense Tracker API is running');
});

export default app;
