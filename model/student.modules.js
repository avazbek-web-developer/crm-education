const { Schema, model } = require("mongoose");
const { Lid } = require("./lid.modules");

const StudentSchema = new Schema({
    lid_id: {
        type: Schema.Types.ObjectId, ref: Lid
    },
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    phone_number: {
        type: Number,
        required: true,
        trim: true
    },
    birthday: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true
    }
});

const Student = model('student', StudentSchema);
module.exports = { Student };
