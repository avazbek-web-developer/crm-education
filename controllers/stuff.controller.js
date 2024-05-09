const { Stuff } = require('../model/stuff.modules')

// ----------------Get Stuff---------------------
const getStuff = async (req, res) => {
    try {
        const stuffs = await Stuff.find({});
        res.json({ success: true, message: "Barcha foydalanuvchilar ro'yxati olingan.", innerData: stuffs });
    } catch (error) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Foydalanuvchilarni olishda xato yuz berdi." });
    }
};
// ----------------Stuff register-------------------
const postStuffRegister = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            phone_number,
            login,
            parol,
            is_active
        } = req.body;
        const newStuff = new Stuff({
            first_name,
            last_name,
            phone_number,
            login,
            parol,
            is_active
        });
        await newStuff.save();
        return res.status(201).json({
            success: true,
            message: "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi."
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update Stuff--------------------
const updateStuff = async (req, res) => {
    try {
        const { id } = req.params;
        // Update user in the database
        const updateStuff = await Stuff.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateStuff) { // Corrected variable name
            return res.status(404).json({
                success: false,
                message: 'Stuff not found!',
            });
        }
        res.json({
            success: true,
            message: 'Stuff updated successfully!',
            car: updateStuff,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};
// ---------------DELETE Stuff--------------
const deleteStuff = async (req, res) => {
    try {
        const StuffID = req.params.id
        let deletedStuff = await Stuff.findByIdAndDelete(StuffID);
        if (!deletedStuff) {
            return res.json({
                success: false,
                message: "Stuff is not deleted!",
                deletedStuff
            })
        }
        res.json({
            success: true,
            message: "Stuff is deleted!",
        })
    } catch (error) {
        res.json({ success: false, message: error })
    }
}
// ------------get Stuff by id-----------------
const getStuffById = async (req, res) => {
    try {
        const stuffId = req.params.id;
        const Stuff_ID = await Stuff.findById(stuffId);
        if (!Stuff_ID) {
            return res.status(404).json({
                message: "Stuff ID is not found",
            });
        }
        res.json({ message: "Stuff ID found", stuffId });
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
    getStuff,
    postStuffRegister,
    updateStuff,
    deleteStuff,
    getStuffById
}