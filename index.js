import express from 'express';
import bodyParser from 'body-parser';

import usersRouter from './routes/users.js';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use('/users', usersRouter);

app.get('/', (req, res) => {
  res.send('hello from homepage');
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
