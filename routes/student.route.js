const { Router } = require('express');
const students = Router();

const {
    deleteStudent,
    getStudent,
    getStudentById,
    postStudentRegister,
    updateStudent
} = require('../controllers/student.controller');

students.post('/postStudentRegister', postStudentRegister);
students.get('/getStudent', getStudent)
students.put('/updateStudent/:id', updateStudent);
students.delete('/deleteStudent/:id', deleteStudent);
students.get('/getStudentById/:id', getStudentById);

module.exports = { students }