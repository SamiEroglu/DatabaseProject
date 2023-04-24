// server.js
const express = require('express');
const path = require('path');
const knex = require('knex')(require('./knexfile'));

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/users', async (req, res) => {
  try {
    const users = await knex.select('*').from('users');
    res.json(users);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server listening on port ${port}...`));

