const { Stage } = require('../model/stage.modules');

// ----------------Get Stage---------------------
const getStage = async (req, res) => {
    try {
        const stage = await Stage.find({});
        res.json({ success: true, message: "Barcha Bosqichlar ro'yxati olingan.", innerData: stage });
    } catch (error) {
        console.error("Error fetching stages:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Foydalanuvchilarni olishda xato yuz berdi." });
    }
};

// ----------------Stage register-------------------
const postStageRegister = async (req, res) => {
    try {
        const {
            stage_name
        } = req.body;
        const newStage = new Stage({
            stage_name

        });
        await newStage.save();
        return res.status(201).json({
            success: true,
            message: "Stage successfully registered"
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update Stage--------------------
const updateStage = async (req, res) => {
    try {
        const { id } = req.params;
        const updateStage = await Stage.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateStage) {
            return res.status(404).json({
                success: false,
                message: 'Stage is not found!',
            });
        }
        res.json({
            success: true,
            message: 'Stage updated successfully!',
            car: updateStage,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};
// ---------------Delete Stage--------------
const deleteStage = async (req, res) => {
    try {
        const StageId = req.params.id
        let deletedStage = await Stage.findByIdAndDelete(StageId);
        if (!deletedStage) {
            return res.json({
                success: false,
                message: "Stage is not deleted!",
                deletedStage
            })
        }
        res.json({
            success: true,
            message: "Stage is deleted!",
        })
    } catch (error) {
        res.json({ success: false, message: error })
    }
}

// ------------get Stage by id-----------------
const getStageById = async (req, res) => {
    try {
        const StageID = req.params.id;
        const stage = await Stage.findById(StageID);
        if (!stage) {
            return res.status(404).json({
                message: "Stage is not found",
            });
        }
        res.json({ message: "Stage is found", stage });
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
    getStage,
    postStageRegister,
    deleteStage,
    updateStage,
    getStageById
}