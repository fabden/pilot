// Imports
const Usermodel = require('../models/usersModel');

// Find all users
exports.usersGetAll = async (req, res) => {
  await Usermodel.find()
    .then((datas) => {
      res.status(200).json(datas);
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
};

// Update user
exports.userUpdate = (req, res) => {
  Usermodel.findByIdAndUpdate(req.params.user, req.body, { new: true })
    .then((doc) => { res.status(200).json(doc); });
};

// Post user
exports.userPost = (req, res) => {
  const datas = [{
    pseudo: 'Nom joueur 1',
    vie: '50',
    force: '41',
  },
  {
    pseudo: 'Nom joueur 2',
    vie: '4',
    force: '74',
  },
  {
    pseudo: 'Nom joueur 3',
    vie: '30',
    force: '65',
  },
  {
    pseudo: 'Nom joueur 4',
    vie: '12',
    force: '21',
  },
  {
    pseudo: 'Nom joueur 5',
    vie: '50',
    force: '41',
  },
  {
    pseudo: 'Nom joueur 6',
    vie: '4',
    force: '74',
  },
  {
    pseudo: 'Nom joueur 7',
    vie: '30',
    force: '65',
  },
  {
    pseudo: 'Nom joueur 8',
    vie: '12',
    force: '21',
  }];

  datas.forEach((e) => {
    const newUserModel = new Usermodel(e);
    newUserModel.save();
  });

  res.status(201).json({ base: 'ok' });
};
