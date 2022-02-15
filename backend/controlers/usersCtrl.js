// Imports
const mongoose = require('mongoose');
const userModel = require('../models/usersModel')


// find all users
exports.usersGetAll = async (req,res)=>{ 

 await   userModel.find()
    .then((datas)=>{
        res.status(200).json(datas)
    })
    .catch((err) => {
        res.status(500).json({
          error: err.message,
        });
     })

}


//update user
exports.userUpdate =(req,res)=>{  
  userModel.findByIdAndUpdate(req.params.user,req.body,{new: true})
    .then((doc)=>{res.status(200).json(doc)})
}

//post user
exports.userPost =(req,res)=>{  
    
    const datas = [{
        pseudo: "nom joueur 1",
        vie: "50",
        force: "41",
        agilite: "2",
        },
        {
        pseudo: "nom jouer 2",      
        vie: "4",
        force: "74",
        agilite: "3",
        },
        {
        pseudo: "nom jouer 3",
        vie: "30",
        force: "65",
        agilite: "80",
        },
        {
        pseudo: "nom jouer 4",
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