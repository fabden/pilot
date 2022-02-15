// Imports
const express = require("express");
const UsersCtrl = require('../controlers/usersCtrl')


const users = express.Router();

users.route("/all")
  .get(UsersCtrl.users_get_all);

module.exports = users;
