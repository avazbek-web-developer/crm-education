const { Schema, model } = require("mongoose");

const Lid_StatusSchema = new Schema({
    status: {
        type: String,
        required: true,
        trim: true
    }
});

const Lid_Status = model('lid_status', Lid_StatusSchema);
module.exports = { Lid_Status };
