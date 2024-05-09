const { Router } = require('express');
const lid = Router();

const {
    deleteLid,
    getLid,
    getLidById,
    postLidRegister,
    updateLid
} = require('../controllers/lid.controller');

lid.post('/postLidRegister', postLidRegister);
lid.get('/getLid', getLid)
lid.put('/updateLid/:id', updateLid);
lid.delete('/deleteLid/:id', deleteLid);
lid.get('/getLidById/:id', getLidById);

module.exports = { lid }