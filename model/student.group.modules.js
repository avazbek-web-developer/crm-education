const { Schema, model } = require("mongoose");
const { Student } = require('./student.modules')
const { Group } = require('./group.modules')
const StudentGroupSchema = new Schema({
    student_id: {
        type: Schema.Types.ObjectId, ref: Student
    },
    group_id: {
        type: Schema.Types.ObjectId, ref: Group
    }
});

const StudentGroup = model('studentGroup', StudentGroupSchema);
module.exports = { StudentGroup };
