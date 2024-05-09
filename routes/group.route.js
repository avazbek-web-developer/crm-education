const { Router } = require('express');
const groups = Router();

const {
    getGroup,
    postGroupRegister,
    deleteGroup,
    getGroupById,
    updateGroup
} = require('../controllers/group.controller');

groups.post('/postGroupRegister', postGroupRegister);
groups.get('/getGroup', getGroup)
groups.put('/updateGroup/:id', updateGroup);
groups.delete('/deleteGroup/:id', deleteGroup);
groups.get('/getGroupById/:id', getGroupById);

module.exports = { groups }