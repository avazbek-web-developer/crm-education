const { Schema, model } = require("mongoose");
const { Stage } = require('./stage.modules')
const { Branch } = require('./branch.modules')

const GroupSchema = new Schema({
    group_name: {
        type: String,
        required: true,
        trim: true
    },
    lesson_start_time: {
        type: Date,
        required: true,
        trim: true
    },
    lesson_continuous: {
        type: String,
        required: true,
    },
    lesson_week_day: {
        type: String,
        required: true,
    },
    group_stage_id: {
        type: Schema.Types.ObjectId, ref: Stage
    },
    room_number: {
        type: Number,
        required: true,
        trim: true
    },
    room_flour: {
        type: Number,
        required: true,
        trim: true
    },
    branch_id: {
        type: Schema.Types.ObjectId, ref: Branch
    },
    lessons_quantity: {
        type: Number,
        required: true,
        trim: true
    },
    is_Active: {
        type: Boolean,
        required: true,
        trim: true
    },
});

const Group = model('group', GroupSchema);
module.exports = { Group };
