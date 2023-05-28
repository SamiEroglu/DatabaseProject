const express = require('express');
const path = require('path');
const knex = require('knex')(require('./knexfile'));
const cors = require("cors")

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/signup', async (req, res) => {
  try {
    const { name, surname, tc, phone, email, password } = req.body;
    
    // Veritabanına yeni kullanıcı eklemek için insert işlemi gerçekleştiriyoruz
    await knex('users').insert({
      name,
      surname,
      username: name, // Kullanıcının isimlerini kullanıcı adı olarak kabul ediyoruz
      tc,
      phone,
      email,
      password,
    });
    
    res.sendStatus(200); // Başarılı yanıt dönüyoruz
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Hata durumunda 500 hatası dönüyoruz
  }
});


app.get('/users', async (req, res) => {
  try {
    const users = await knex.select('*').from('users');
    res.json(users);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
app.post('/createpost', async (req, res) => {
  try {
    const { title, description, ptel, fiyat } = req.body;
    
    // Veritabanına yeni kullanıcı eklemek için insert işlemi gerçekleştiriyoruz
    await knex('jobs').insert({
      title,
      description,
      ptel, // Kullanıcının isimlerini kullanıcı adı olarak kabul ediyoruz
      fiyat,
    });
    
    res.sendStatus(200); // Başarılı yanıt dönüyoruz
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Hata durumunda 500 hatası dönüyoruz
  }
});


app.get('/jobs', async (req, res) => {
  try {
    const jobs = await knex.select('*').from('jobs');
    res.json(jobs);
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