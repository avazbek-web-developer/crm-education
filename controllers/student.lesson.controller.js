const { StudentLesson } = require("../model/student.lesson.modules")

// ----------------Get StudentLesson---------------------
const getStudentLesson = async (req, res) => {
    try {
        const studentLesson = await StudentLesson.find({});
        res.json({ success: true, message: "All Student Lessons are found.", innerData: studentLesson });
    } catch (error) {
        console.error("Error fetching stages:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Foydalanuvchilarni olishda xato yuz berdi." });
    }
};

// ----------------StudentLesson register-------------------
const postStudentLessonRegister = async (req, res) => {
    try {
        const {
            lesson_id,
            student_id,
            is_there,
            reason,
            be_paid
        } = req.body;
        const newStudentLesson = new StudentLesson({
            lesson_id,
            student_id,
            is_there,
            reason,
            be_paid
        });
        await newStudentLesson.save();
        return res.status(201).json({
            success: true,
            message: "StudentLesson is successfully registered"
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update StudentLesson--------------------
const updateStudentLesson = async (req, res) => {
    try {
        const { id } = req.params;
        const updateStudentLesson = await StudentLesson.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateStudentLesson) {
            return res.status(404).json({
                success: false,
                message: 'StudentLesson is not found!',
            });
        }
        res.json({
            success: true,
            message: 'StudentLesson is updated successfully!',
            StudentGroup: updateStudentLesson,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};
// ---------------Delete StudentLesson--------------
const deleteStudentLesson = async (req, res) => {
    try {
        const StudentLessonId = req.params.id
        let deletedStudentLesson = await StudentLesson.findByIdAndDelete(StudentLessonId);
        if (!deletedStudentLesson) {
            return res.json({
                success: false,
                message: "StudentLesson is not deleted!",
                deletedStudentLesson
            })
        }
        res.json({
            success: true,
            message: "StudentLesson is deleted!",
        })
    } catch (error) {
        res.json({ success: false, message: error })
    }
}

// ------------get StudentLesson by id-----------------
const getStudentLessonById = async (req, res) => {
    try {
        const StudentLessonId = req.params.id;
        const studentLesson = await StudentLesson.findById(StudentLessonId).populate('student_id lesson_id');
        if (!studentLesson) {
            return res.status(404).json({
                message: "StudentLesson is not found",
            });
        }
        res.json({ message: "StudentLesson is found", studentLesson });
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
    getStudentLesson,
    postStudentLessonRegister,
    updateStudentLesson,
    deleteStudentLesson,
    getStudentLessonById
}