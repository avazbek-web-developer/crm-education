const { Schema, model } = require("mongoose");
const { Group } = require("./group.modules");

const LessonSchema = new Schema({
    lesson_theme: {
        type: String,
        required: true,
        trim: true
    },
    lesson_number: {
        type: Number,
        required: true,
        trim: true
    },
    group_id: {
        type: Schema.Types.ObjectId, ref: Group 
    },
    lesson_date: {
        type: Date,
        required: true,
    }
});

const Lesson = model('lesson', LessonSchema);
module.exports = { Lesson };
