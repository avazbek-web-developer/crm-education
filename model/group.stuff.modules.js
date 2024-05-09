const { Schema, model } = require("mongoose");
const { Stuff } = require('./stuff.modules')
const { Group } = require('./group.modules')

const GroupStuffSchema = new Schema({
    group_id: {
        type: Schema.Types.ObjectId, ref: Group
    },
    stuff_id: {
        type: Schema.Types.ObjectId, ref: Stuff
    }
});

const GroupStuff = model('groupstuff', GroupStuffSchema);
module.exports = { GroupStuff };
