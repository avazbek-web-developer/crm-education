const { Router } = require('express');
const reson_lid = Router();

const {
    deleteReason_Lid,
    getReason_Lid,
    getReason_LidById,
    postReason_LidRegister,
    updateReason_Lid
} = require('../controllers/reason_lid.controller');

reson_lid.post('/postReason_LidRegister', postReason_LidRegister);
reson_lid.get('/getReason_Lid', getReason_Lid)
reson_lid.put('/updateReason_Lid/:id', updateReason_Lid);
reson_lid.delete('/deleteReason_Lid/:id', deleteReason_Lid);
reson_lid.get('/getReason_LidById/:id', getReason_LidById);

module.exports = { reson_lid }