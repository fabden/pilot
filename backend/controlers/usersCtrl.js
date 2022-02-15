// Imports
const mongoose = require('mongoose');


// find all users
exports.usersGetAll = (req,res)=>{ res.status(200).json({controleur:'users'})}


//update user
exports.userUpdate =(req,res)=>{
    
    res.status(200).json({controleur:req.params.user})
}