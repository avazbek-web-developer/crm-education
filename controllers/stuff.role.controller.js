const { RoleStuff } = require("../model/stuff.role.modules")

// ----------------Get RoleStuff---------------------
const getRoleStuff = async (req, res) => {
    try {
        const roleStuff = await RoleStuff.find({});
        res.json({ success: true, message: "Barcha ishchilar ro'yhati olindi", innerData: roleStuff });
    } catch (error) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Foydalanuvchilarni olishda xato yuz berdi." });
    }
};
// ----------------RoleStuff register-------------------
const postRoleStuff = async (req, res) => {
    try {
        const {
            stuff_id,
            role_id
        } = req.body;
        const newStuffRole = new RoleStuff({
            stuff_id,
            role_id
        });
        await newStuffRole.save();
        return res.status(201).json({
            success: true,
            message: "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi."
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update RoleStuff--------------------
const updateRoleStuff = async (req, res) => {
    try {
        const { id } = req.params;
        // Update user in the database
        const updateRoleStuff = await RoleStuff.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateRole) { // Corrected variable name
            return res.status(404).json({
                success: false,
                message: 'RoleStuff not found!',
            });
        }
        res.json({
            success: true,
            message: 'RoleStuff updated successfully!',
            car: updateRoleStuff,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};
// ---------------DELETE RoleStuff--------------
const deleteRoleStuff = async (req, res) => {
    try {
        const StuffID = req.params.id
        let deletedRoleStuff = await RoleStuff.findByIdAndDelete(StuffID);
        if (!deletedRoleStuff) {
            return res.json({
                success: false,
                message: "RoleStuff is not deleted!",
                deletedRoleStuff
            })
        }
        res.json({
            success: true,
            message: "RoleStuff is deleted!",
        })
    } catch (error) {
        res.json({ success: false, message: error })
    }
}
// ---------------get by Id RoleStuff--------------

const getRoleStuffById = async (req, res) => {
    try {
        const roleStuffId = req.params.id;
        const roleStuff = await RoleStuff.findById(roleStuffId).populate('stuff_id role_id');
        if (!roleStuff) {
            return res.status(404).json({
                message: "Role Stuff ID is not found",
            });
        }
        res.json({ message: "Role Stuff ID found", roleStuff });
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
    getRoleStuff,
    postRoleStuff,
    updateRoleStuff,
    deleteRoleStuff,
    getRoleStuffById
}