const { Router } = require('express');
const lessons = Router();

const {
    deleteLesson,
    getLessonById,
    getLesson,
    postLessonRegister,
    updateLesson
} = require('../controllers/lesson.controller');

lessons.post('/postLessonRegister', postLessonRegister);
lessons.get('/getLesson', getLesson)
lessons.put('/updateLesson/:id', updateLesson);
lessons.delete('/deleteLesson/:id', deleteLesson);
lessons.get('/getLessonById/:id', getLessonById);

module.exports = { lessons }