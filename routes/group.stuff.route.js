const { Router } = require('express');
const groupstuff = Router();

const {
    postGroupStuffRegister,
    deleteGroupStuff,
    getGroupStuff,
    getGroupStuffById,
    updateGroupStuff
} = require('../controllers/group.stuff.controller');

groupstuff.post('/postGroupStuffRegister', postGroupStuffRegister);
groupstuff.get('/getGroupStuff', getGroupStuff)
groupstuff.put('/updateGroupStuff/:id', updateGroupStuff);
groupstuff.delete('/deleteGroupStuff/:id', deleteGroupStuff);
groupstuff.get('/getGroupStuffById/:id', getGroupStuffById);

module.exports = { groupstuff }