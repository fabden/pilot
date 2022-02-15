// Imports
const mongoose = require('mongoose');
const userModel = require('../models/usersModel')


// find all users
exports.combat = async (req,res)=>{ 
    res.status(200).json("combat ok")   
   }