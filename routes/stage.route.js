const { Router } = require('express');
const stages = Router();

const {
    getStage,
    postStageRegister,
    updateStage,
    deleteStage,
    getStageById
} = require('../controllers/stage.controller');

stages.post('/postStageRegister', postStageRegister);
stages.get('/getStage', getStage)
stages.put('/updateStage/:id', updateStage);
stages.delete('/deleteStage/:id', deleteStage);
stages.get('/getStageById/:id', getStageById);

module.exports = { stages }