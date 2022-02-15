// import
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    vie: { type: String, required: true },
    force: { type: String, required: true },
    agilite: { type: String, required: true },
});


module.exports = mongoose.model('User', userSchema);