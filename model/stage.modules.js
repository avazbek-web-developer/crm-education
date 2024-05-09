const { Schema, model } = require("mongoose");

const StageSchema = new Schema({
    stage_name: {
        type: String,
        required: true,
        trim: true
    }
});

const Stage = model('stage', StageSchema);
module.exports = { Stage };
