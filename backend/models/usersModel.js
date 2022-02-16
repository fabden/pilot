// import
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  pseudo: { type: String, required: true },
  vie: { type: String, required: true },
  force: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
