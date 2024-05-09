const { Lid } = require('../model/lid.modules');

// ----------------Get Lid_Status---------------------
const getLid = async (req, res) => {
    try {
        const lid = await Lid.find({});
        res.json({ success: true, message: "All Lid  are found.", innerData: lid });
    } catch (error) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Foydalanuvchilarni olishda xato yuz berdi." });
    }
};

// ----------------Lid register-------------------
const postLidRegister = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            phone_number,
            lid_stage_id,
            test_date,
            trial_lesson_date,
            trial_lesson_time,
            trial_lesson_group_id,
            lid_status_id,
            cancel_reason_id
        } = req.body;
        const newLid = new Lid({
            first_name,
            last_name,
            phone_number,
            lid_stage_id,
            test_date,
            trial_lesson_date,
            trial_lesson_time,
            trial_lesson_group_id,
            lid_status_id,
            cancel_reason_id
        });
        await newLid.save();
        return res.status(201).json({
            success: true,
            message: "Lid is successfully registered."
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update Lid--------------------
const updateLid = async (req, res) => {
    try {
        const { id } = req.params;
        // Update user in the database
        const updateLid = await Lid.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateLid) { // Corrected variable name
            return res.status(404).json({
                success: false,
                message: 'Lid is not found!',
            });
        }
        res.json({
            success: true,
            message: 'Lid is updated successfully!',
            Lid: updateLid,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};

// ---------------DELETE Lid--------------
const deleteLid = async (req, res) => {
    try {
        const LidId = req.params.id
        let deletedLid = await Lid.findByIdAndDelete(LidId);
        if (!deletedLid) {
            return res.json({
                success: false,
                message: "Lid is not deleted!",
                deletedLid
            })
        }
        res.json({
            success: true,
            message: "Lid is deleted!",
        })
    } catch (error) {
        res.json({ success: false, message: error })
    }
}

// ------------get Lid by id-----------------
const getLidById = async (req, res) => {
    try {
        const LidID = req.params.id;
        const lid = await Lid.findById(LidID).populate('cancel_reason_id lid_status_id trial_lesson_group_id lid_stage_id');
        if (!lid) {
            return res.status(404).json({
                message: "Lid is not found",
            });
        }
        res.json({ message: "Lid is found", lid });
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
    getLidById,
    deleteLid,
    updateLid,
    postLidRegister,
    getLid
}