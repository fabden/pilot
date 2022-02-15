// Imports
const express = require("express");
const usersCtrl = require('../controlers/usersCtrl')


const users = express.Router();

users.route("/get/all")
  .get(usersCtrl.usersGetAll);

module.exports = users;
