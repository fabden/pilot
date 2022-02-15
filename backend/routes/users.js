// Imports
const express = require("express");

const users = express.Router();

users.route("/all")
  .get((req,res)=>{ res.status(200).json({dddd:'users'})});

module.exports = users;
