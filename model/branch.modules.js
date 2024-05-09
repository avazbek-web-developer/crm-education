const { Schema, model } = require("mongoose");

const BranchSchema = new Schema({
    branch_name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    call_number: {
        type: Number,
        required: true,
    }
});

const Branch = model('branch', BranchSchema);
module.exports = { Branch };
