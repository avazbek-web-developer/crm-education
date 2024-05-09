const { Router } = require('express')
const stuffroles = Router()

const {
    getRoleStuff,
    postRoleStuff,
    updateRoleStuff,
    deleteRoleStuff,
    getRoleStuffById
} = require('../controllers/stuff.role.controller')

stuffroles.post('/postRoleStuff', postRoleStuff);
stuffroles.get('/getRoleStuff', getRoleStuff);
stuffroles.put('/updateRoleStuff', updateRoleStuff);
stuffroles.delete('/deleteRoleStuff/:id', deleteRoleStuff);
stuffroles.get('/getRoleStuffById/:id', getRoleStuffById);

module.exports = { stuffroles }