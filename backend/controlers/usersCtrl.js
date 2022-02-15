// Imports
const mongoose = require('mongoose');
const userModel = require('../models/usersModel')


// find all users
exports.usersGetAll = (req,res)=>{ res.status(200).json({controleur:'users'})}


//update user
exports.userUpdate =(req,res)=>{    
    res.status(200).json({controleur:req.params.user})
}

//post user
exports.userPost =(req,res)=>{    

  const newUserModel = new userModel({
    nom: "{ type: String, required: true }",
    prenom: "{ type: String, required: true }",
    vie: "{ type: String, required: true }",
    force: "{ type: String, required: true }",
    agilite: "{ type: String, required: true }",
    });

    newUserModel.save()
    .then(()=>{
        res.status(201).json({posqt:"user creer"})
    })
    .catch((error) => {
        res.status(500).json({ message: error });
      });


   
}