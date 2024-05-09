const { Schema, model } = require("mongoose");

const Reason_LidSchema = new Schema({
    reason_lid: {
        type: String,
        required: true,
        trim: true
    }
});

const Reason_Lid = model('reason_Lid', Reason_LidSchema);
module.exports = { Reason_Lid };
