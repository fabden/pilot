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
    
    const datas = [{
        nom: "nom joueur 1",
        prenom: "prenom jouer 1",
        vie: "50",
        force: "41",
        agilite: "2",
        },
        {
        nom: "nom jouer 2",
        prenom: "prenom jouer 2",
        vie: "4",
        force: "74",
        agilite: "3",
        },
        {
        nom: "nom jouer 3",
        prenom: "prenom jouer 3",
        vie: "30",
        force: "65",
        agilite: "80",
        },
        {
        nom: "nom jouer 4",
        prenom: "prenom jouer 4",
        vie: "12",
        force: "21",
        agilite: "32",
        }]

        datas.map((e)=>{e        
            const newUserModel = new userModel(e);            
            newUserModel.save();}
   )

    res.status(201).json({base:"ok"})
   
}