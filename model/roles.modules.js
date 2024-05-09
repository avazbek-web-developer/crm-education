const { Schema, model } = require("mongoose");

const RoleSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Role = model('role', RoleSchema);
module.exports = { Role };
