// Imports
const express = require("express");
const app = express();
const usersRoutes = require('./routes/usersRoutes')
const mongoose = require('mongoose');

// Analyse les corps de requête entrants dans le middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    next();
  });

  // connection to DataBase
mongoose.connect(`mongodb://localhost:27017/pilot`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// routes
app.use("/users", usersRoutes);
app.use("/combat",(req,res)=>{ res.status(200).json({dddd:'combat'})})

// export
module.exports = app;
