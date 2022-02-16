// Imports
const express = require('express');
const usersCtrl = require('../controlers/usersCtrl');

const users = express.Router();

users.get('/get/all', usersCtrl.usersGetAll);
users.patch('/update/:user', usersCtrl.userUpdate);
users.post('/post', usersCtrl.userPost);
module.exports = users;
