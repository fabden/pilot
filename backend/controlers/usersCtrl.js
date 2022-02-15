// Imports
const mongoose = require('mongoose');


// find all users
exports.users_get_all = (req,res)=>{ res.status(200).json({controleur:'users'})}