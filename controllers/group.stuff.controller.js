const { GroupStuff } = require('../model/group.stuff.modules');

// ----------------Get GroupStuff---------------------
const getGroupStuff = async (req, res) => {
    try {
        const groupStuff = await GroupStuff.find({});
        res.json({ success: true, message: "All group stuffs are found", innerData: groupStuff });
    } catch (error) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Something is wrong" });
    }
};

// ----------------GroupStuff register-------------------
const postGroupStuffRegister = async (req, res) => {
    try {
        const {
            group_id,
            stuff_id
        } = req.body;
        const newGroupStuff = new GroupStuff({
            group_id,
            stuff_id
        });
        await newGroupStuff.save();
        return res.status(201).json({
            success: true,
            message: "GrounStuff is successfully registered!"
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update GroupStuff--------------------
const updateGroupStuff = async (req, res) => {
    try {
        const { id } = req.params;
        // Update user in the database
        const updateGroupStuff = await Role.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateGroupStuff) { // Corrected variable name
            return res.status(404).json({
                success: false,
                message: 'GroupStuff not found!',
            });
        }
        res.json({
            success: true,
            message: 'GroupStuff updated successfully!',
            car: updateGroupStuff,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};

// ---------------Delete GroupStuff--------------
const deleteGroupStuff = async (req, res) => {
    try {
        const GroupStuffId = req.params.id
        let deletedGroupStuff = await GroupStuff.findByIdAndDelete(GroupStuffId)
        if (!deletedGroupStuff) {
            return res.json({
                success: false,
                message: "Role is not deleted!",
                deletedGroupStuff
            })
        }
        res.json({
            success: true,
            message: "Role is deleted!",
        })
    } catch (error) {
        res.json({ success: false, message: error })
    }
}

// ------------get GroupStuff by id-----------------
const getGroupStuffById = async (req, res) => {
    try {
        const GroupStuffID = req.params.id;
        const groupStuff = await GroupStuff.findById(GroupStuffID).populate('group_id stuff_id');;
        if (!groupStuff) {
            return res.status(404).json({
                message: "GroupStuff is not found",
            });
        }
        res.json({ message: "GroupStuff found", groupStuff });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};

module.exports = {
    postGroupStuffRegister,
    getGroupStuff,
    updateGroupStuff,
    deleteGroupStuff,
    getGroupStuffById
}