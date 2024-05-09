const { Schema, model } = require("mongoose");
const { Lesson } = require('./lesson.modules')
const { Student } = require('./student.modules')
const StudentLessonSchema = new Schema({
    lesson_id: {
        type: Schema.Types.ObjectId, ref: Lesson
    },
    student_id: {
        type: Schema.Types.ObjectId, ref: Student
    },
    is_there: {
        type: Boolean,
        required: true,
        trim: true
    },
    reason: {
        type: String,
        required: true,
        trim: true
    },
    be_paid: {
        type: Boolean,
        required: true,
        trim: true
    }
});

const StudentLesson = model('studentLesson', StudentLessonSchema);
module.exports = { StudentLesson };
