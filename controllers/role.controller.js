const { Role } = require('../model/roles.modules');

// ----------------Get Roles---------------------
const getRole = async (req, res) => {
    try {
        const roles = await Role.find({});
        res.json({ success: true, message: "Barcha foydalanuvchilar ro'yxati olingan.", innerData: roles });
    } catch (error) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Foydalanuvchilarni olishda xato yuz berdi." });
    }
};

// ----------------Role register-------------------
const postRoleRegister = async (req, res) => {
    try {
        const {
            name
        } = req.body;
        const newRole = new Role({
            name
        });
        await newRole.save();
        return res.status(201).json({
            success: true,
            message: "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi."
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update Role--------------------
const updateRole = async (req, res) => {
    try {
        const { id } = req.params;
        // Update user in the database
        const updateRole = await Role.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateRole) { // Corrected variable name
            return res.status(404).json({
                success: false,
                message: 'Role not found!',
            });
        }
        res.json({
            success: true,
            message: 'Role updated successfully!',
            car: updateRole,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};

// ---------------DELETE ROle--------------
const deleteRole = async (req, res) => {
    try {
        const RoleId = req.params.id
        let deletedRole = await Role.findByIdAndDelete(RoleId);
        if (!deletedRole) {
            return res.json({
                success: false,
                message: "Role is not deleted!",
                deletedRole
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

// ------------get Role by id-----------------
const getRoleById = async (req, res) => {
    try {
        const RoleID = req.params.id;
        const role = await Role.findById(RoleID);
        if (!role) {
            return res.status(404).json({
                message: "Role is not found",
            });
        }
        res.json({ message: "Role found", role });
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
    postRoleRegister,
    updateRole,
    getRole,
    deleteRole,
    getRoleById
}