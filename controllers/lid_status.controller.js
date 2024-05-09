const { Lid_Status } = require('../model/lid_status.modules');

// ----------------Get Lid_Status---------------------
const getLid_Status = async (req, res) => {
    try {
        const lid_Status = await Lid_Status.find({});
        res.json({ success: true, message: "All Lid Status are found.", innerData: lid_Status });
    } catch (error) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Foydalanuvchilarni olishda xato yuz berdi." });
    }
};

// ----------------Role register-------------------
const postLid_StatusRegister = async (req, res) => {
    try {
        const {
            status
        } = req.body;
        const newLid_Status = new Lid_Status({
            status
        });
        await newLid_Status.save();
        return res.status(201).json({
            success: true,
            message: "Lid_Status is successfully registered."
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update Lid_Status--------------------
const updateLid_Status = async (req, res) => {
    try {
        const { id } = req.params;
        // Update user in the database
        const updateLid_Status = await Lid_Status.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateLid_Status) { // Corrected variable name
            return res.status(404).json({
                success: false,
                message: 'Lid_Status is not found!',
            });
        }
        res.json({
            success: true,
            message: 'Lid_Status is updated successfully!',
            car: updateLid_Status,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};

// ---------------DELETE Lid_Status--------------
const deleteLid_Status = async (req, res) => {
    try {
        const Lid_StatusId = req.params.id
        let deletedLid_Status = await Lid_Status.findByIdAndDelete(Lid_StatusId);
        if (!deletedLid_Status) {
            return res.json({
                success: false,
                message: "Lid_Status is not deleted!",
                deletedLid_Status
            })
        }
        res.json({
            success: true,
            message: "Lid_Status is deleted!",
        })
    } catch (error) {
        res.json({ success: false, message: error })
    }
}

// ------------get Lid_Status by id-----------------
const getLid_StatusById = async (req, res) => {
    try {
        const Lid_StatusID = req.params.id;
        const lid_Status = await Lid_Status.findById(Lid_StatusID);
        if (!lid_Status) {
            return res.status(404).json({
                message: "RoLid_Statusle is not found",
            });
        }
        res.json({ message: "Lid_Status is found", lid_Status });
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
    getLid_Status,
    postLid_StatusRegister,
    updateLid_Status,
    deleteLid_Status,
    getLid_StatusById
}