const { Router } = require('express');
const lidstatus = Router();

const {
    deleteLid_Status,
    getLid_StatusById,
    getLid_Status,
    postLid_StatusRegister,
    updateLid_Status
} = require('../controllers/lid_status.controller');

lidstatus.post('/postLid_StatusRegister', postLid_StatusRegister);
lidstatus.get('/getLid_Status', getLid_Status)
lidstatus.put('/updateLid_Status/:id', updateLid_Status);
lidstatus.delete('/deleteLid_Status/:id', deleteLid_Status);
lidstatus.get('/getLid_StatusById/:id', getLid_StatusById);

module.exports = { lidstatus }