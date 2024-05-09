const { Router } = require('express');
const branches = Router();

const {
    postBranchRegister,
    getBranch,
    updateBranch,
    deleteBranch,
    getBranchById
} = require('../controllers/branch.controller');

branches.post('/postBranchRegister', postBranchRegister);
branches.get('/getBranch', getBranch)
branches.put('/updateBranch/:id', updateBranch);
branches.delete('/deleteBranch/:id', deleteBranch);
branches.get('/getBranchById/:id', getBranchById);

module.exports = { branches }