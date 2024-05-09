const { Router } = require('express');
const studentGroup = Router();

const {
    deleteStudentGroup,
    getStudentGroup,
    getStudentGroupById,
    postStudentGroupRegister,
    updateStudentGroup
} = require('../controllers/student.group.controller');

studentGroup.post('/postStudentGroupRegister', postStudentGroupRegister);
studentGroup.get('/getStudentGroup', getStudentGroup)
studentGroup.put('/updateStudentGroup/:id', updateStudentGroup);
studentGroup.delete('/deleteStudentGroup/:id', deleteStudentGroup);
studentGroup.get('/getStudentGroupById/:id', getStudentGroupById);

module.exports = { studentGroup }