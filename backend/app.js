// Imports
const express = require("express");
const app = express();

// Analyse les corps de requête entrants dans le middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    next();
  });

// routes
app.use("/", (req,res)=>{ res.status(200).json({dddd:'ee'})});


// export
module.exports = app;
