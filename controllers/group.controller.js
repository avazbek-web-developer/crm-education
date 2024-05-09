const { Group } = require("../model/group.modules")

// ----------------Get Group---------------------
const getGroup = async (req, res) => {
    try {
        const group = await Group.find({});
        res.json({ success: true, message: "All groups are found.", innerData: group });
    } catch (error) {
        console.error("Error fetching stages:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Foydalanuvchilarni olishda xato yuz berdi." });
    }
};

// ----------------Group register-------------------
const postGroupRegister = async (req, res) => {
    try {
        const {
            group_name,
            lesson_start_time,
            lesson_continuous,
            lesson_week_day,
            group_stage_id,
            room_number,
            room_flour,
            branch_id,
            lessons_quantity,
            is_Active

        } = req.body;
        const newGroup = new Group({
            group_name,
            lesson_start_time,
            lesson_continuous,
            lesson_week_day,
            group_stage_id,
            room_number,
            room_flour,
            branch_id,
            lessons_quantity,
            is_Active
        });
        await newGroup.save();
        return res.status(201).json({
            success: true,
            message: "Group successfully registered"
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update Group--------------------
const updateGroup = async (req, res) => {
    try {
        const { id } = req.params;
        const updateGroup = await Group.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateGroup) {
            return res.status(404).json({
                success: false,
                message: 'Group is not found!',
            });
        }
        res.json({
            success: true,
            message: 'Group updated successfully!',
            car: updateGroup,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};
// ---------------Delete Group--------------
const deleteGroup = async (req, res) => {
    try {
        const GroupId = req.params.id
        let deletedGroup = await Group.findByIdAndDelete(GroupId);
        if (!deletedGroup) {
            return res.json({
                success: false,
                message: "Group is not deleted!",
                deletedGroup
            })
        }
        res.json({
            success: true,
            message: "Group is deleted!",
        })
    } catch (error) {
        res.json({ success: false, message: error })
    }
}

// ------------get Group by id-----------------
const getGroupById = async (req, res) => {
    try {
        const GroupId = req.params.id;
        const group = await Group.findById(GroupId).populate('group_stage_id branch_id');
        if (!group) {
            return res.status(404).json({
                message: "Group is not found",
            });
        }
        res.json({ message: "Group is found", group });
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
    getGroup,
    postGroupRegister,
    deleteGroup,
    updateGroup,
    getGroupById
}