// Imports
const express = require("express");
const combatCtrl = require('../controlers/combatCtrl')


const combatRoutes = express.Router();

combatRoutes.post("/",combatCtrl.combat);

module.exports = combatRoutes;