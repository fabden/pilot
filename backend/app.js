// Imports
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const usersRoutes = require('./routes/usersRoutes');

// Analyse les corps de requête entrants dans le middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  next();
});

// connection to DataBase
mongoose.connect('mongodb://localhost:27017/pilot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// routes
app.use('/users', usersRoutes);

// export
module.exports = app;
