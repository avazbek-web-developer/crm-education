const { Router } = require('express');
const studentLesson = Router();

const {
    deleteStudentLesson,
    getStudentLesson,
    getStudentLessonById,
    postStudentLessonRegister,
    updateStudentLesson
} = require('../controllers/student.lesson.controller');

studentLesson.post('/postStudentLessonRegister', postStudentLessonRegister);
studentLesson.get('/getStudentLesson', getStudentLesson)
studentLesson.put('/updateStudentLesson/:id', updateStudentLesson);
studentLesson.delete('/deleteStudentLesson/:id', deleteStudentLesson);
studentLesson.get('/getStudentLessonById/:id', getStudentLessonById);

module.exports = { studentLesson }