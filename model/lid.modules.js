const { Schema, model } = require("mongoose");
const { Stage } = require('./stage.modules')
const { Group } = require('./group.modules')
const { Lid_Status } = require('./lid_status.modules')
const { Reason_Lid } = require('./reason_lid.modules')
const LidSchema = new Schema({
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
        type: String,
        required: true,
        trim: true
    },
    lid_stage_id: {
        type: Schema.Types.ObjectId, ref: Stage
    },
    test_date: {
        type: String,
        required: true,
        trim: true
    },
    trial_lesson_date: {
        type: Number,
        required: true,
        trim: true
    },
    trial_lesson_time: {
        type: String,
        required: true,
        trim: true
    },
    trial_lesson_group_id: {
        type: Schema.Types.ObjectId, ref: Group
    },
    lid_status_id: {
        type: Schema.Types.ObjectId, ref: Lid_Status
    },
    cancel_reason_id: {
        type: Schema.Types.ObjectId, ref: Reason_Lid
    }
});
const Lid = model('lid', LidSchema);
module.exports = { Lid };
