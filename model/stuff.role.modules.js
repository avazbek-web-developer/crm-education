const { Schema, model } = require("mongoose")
const { Role } = require('./roles.modules')
const { Stuff } = require('./stuff.modules')

const stuffRoleSchema = new Schema({
    stuff_id: { type: Schema.Types.ObjectId, ref: Stuff },
    role_id: { type: Schema.Types.ObjectId, ref: Role },
});
const RoleStuff = model('roleStuffs', stuffRoleSchema)
module.exports = { RoleStuff }