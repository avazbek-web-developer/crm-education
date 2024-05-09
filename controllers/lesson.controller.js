const { Lesson } = require("../model/lesson.modules")

// ----------------Get Lesson---------------------
const getLesson = async (req, res) => {
    try {
        const lesson = await Lesson.find({});
        res.json({ success: true, message: "All lessons are found.", innerData: lesson });
    } catch (error) {
        console.error("Error fetching stages:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Foydalanuvchilarni olishda xato yuz berdi." });
    }
};

// ----------------Lesson register-------------------
const postLessonRegister = async (req, res) => {
    try {
        const {
            lesson_theme,
            lesson_number,
            group_id,
            lesson_date
        } = req.body;
        const newLesson = new Lesson({
            lesson_theme,
            lesson_number,
            group_id,
            lesson_date
        });
        await newLesson.save();
        return res.status(201).json({
            success: true,
            message: "Lesson is successfully registered"
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update Lesson--------------------
const updateLesson = async (req, res) => {
    try {
        const { id } = req.params;
        const updateLesson = await Lesson.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateLesson) {
            return res.status(404).json({
                success: false,
                message: 'Lesson is not found!',
            });
        }
        res.json({
            success: true,
            message: 'Lesson updated successfully!',
            car: updateLesson,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};
// ---------------Delete Lesson--------------
const deleteLesson = async (req, res) => {
    try {
        const LessonId = req.params.id
        let deletedLesson = await Lesson.findByIdAndDelete(LessonId);
        if (!deletedLesson) {
            return res.json({
                success: false,
                message: "Lesson is not deleted!",
                deletedLesson
            })
        }
        res.json({
            success: true,
            message: "Lesson is deleted!",
        })
    } catch (error) {
        res.json({ success: false, message: error })
    }
}

// ------------get Lesson by id-----------------
const getLessonById = async (req, res) => {
    try {
        const LessonId = req.params.id;
        const lesson = await Lesson.findById(LessonId).populate('group_id');
        if (!lesson) {
            return res.status(404).json({
                message: "Lesson is not found",
            });
        }
        res.json({ message: "Lesson is found", lesson });
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
    deleteLesson,
    getLesson,
    getLessonById,
    updateLesson,
    postLessonRegister
}