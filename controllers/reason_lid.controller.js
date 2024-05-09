const { Reason_Lid } = require('../model/reason_lid.modules');

// ----------------Get Reason_Lid---------------------
const getReason_Lid = async (req, res) => {
    try {
        const reason_Lid = await Reason_Lid.find({});
        res.json({ success: true, message: "All Reason_Lids are found.", innerData: reason_Lid });
    } catch (error) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Foydalanuvchilarni olishda xato yuz berdi." });
    }
};

// ----------------Reason_Lid register-------------------
const postReason_LidRegister = async (req, res) => {
    try {
        const {
            reason_lid
        } = req.body;
        const newReason_Lid = new Reason_Lid({
            reason_lid
        });
        await newReason_Lid.save();
        return res.status(201).json({
            success: true,
            message: "Reason_Lid is successfully registered."
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update Reason_Lid--------------------
const updateReason_Lid = async (req, res) => {
    try {
        const { id } = req.params;
        // Update user in the database
        const updateReason_Lid = await Reason_Lid.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateReason_Lid) { // Corrected variable name
            return res.status(404).json({
                success: false,
                message: 'Reason_Lid is not found!',
            });
        }
        res.json({
            success: true,
            message: 'Reason_Lid is updated successfully!',
            reason_Lid: updateReason_Lid,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};

// ---------------DELETE Reason_Lid--------------
const deleteReason_Lid = async (req, res) => {
    try {
        const Reason_LidId = req.params.id
        let deletedReason_Lid = await Reason_Lid.findByIdAndDelete(Reason_LidId);
        if (!deletedReason_Lid) {
            return res.json({
                success: false,
                message: "Reason_Lid is not deleted!",
                deletedReason_Lid
            })
        }
        res.json({
            success: true,
            message: "Reason_Lid is deleted!",
        })
    } catch (error) {
        res.json({ success: false, message: error })
    }
}

// ------------get Reason_Lid by id-----------------
const getReason_LidById = async (req, res) => {
    try {
        const Reason_LidID = req.params.id;
        const reason_Lid = await Reason_Lid.findById(Reason_LidID);
        if (!reason_Lid) {
            return res.status(404).json({
                message: "Reason_Lid is not found",
            });
        }
        res.json({ message: "Reason_Lid is found", reason_Lid });
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
    getReason_Lid,
    getReason_LidById,
    deleteReason_Lid,
    updateReason_Lid,
    postReason_LidRegister
}