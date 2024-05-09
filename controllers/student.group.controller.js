const { StudentGroup } = require("../model/student.group.modules")

// ----------------Get StudentGroup---------------------
const getStudentGroup = async (req, res) => {
    try {
        const studentGroup = await StudentGroup.find({});
        res.json({ success: true, message: "All groups are found.", innerData: studentGroup });
    } catch (error) {
        console.error("Error fetching stages:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Foydalanuvchilarni olishda xato yuz berdi." });
    }
};

// ----------------StudentGroup register-------------------
const postStudentGroupRegister = async (req, res) => {
    try {
        const {
            student_id,
            group_id
        } = req.body;
        const newStudentGroup = new StudentGroup({
            student_id,
            group_id
        });
        await newStudentGroup.save();
        return res.status(201).json({
            success: true,
            message: "StudentGroup is successfully registered"
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update StudentGroup--------------------
const updateStudentGroup = async (req, res) => {
    try {
        const { id } = req.params;
        const updateStudentGroup = await StudentGroup.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateStudentGroup) {
            return res.status(404).json({
                success: false,
                message: 'StudentGroup is not found!',
            });
        }
        res.json({
            success: true,
            message: 'StudentGroup is updated successfully!',
            StudentGroup: updateStudentGroup,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};
// ---------------Delete StudentGroup--------------
const deleteStudentGroup = async (req, res) => {
    try {
        const StudentGroupId = req.params.id
        let deletedStudentGroup = await StudentGroup.findByIdAndDelete(StudentGroupId);
        if (!deletedStudentGroup) {
            return res.json({
                success: false,
                message: "StudentGroup is not deleted!",
                deletedStudentGroup
            })
        }
        res.json({
            success: true,
            message: "StudentGroup is deleted!",
        })
    } catch (error) {
        res.json({ success: false, message: error })
    }
}

// ------------get StudentGroup by id-----------------
const getStudentGroupById = async (req, res) => {
    try {
        const StudentGroupId = req.params.id;
        const studentGroup = await StudentGroup.findById(StudentGroupId).populate('student_id group_id');
        if (!studentGroup) {
            return res.status(404).json({
                message: "StudentGroup is not found",
            });
        }
        res.json({ message: "StudentGroup is found", studentGroup });
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
    getStudentGroup,
    postStudentGroupRegister,
    updateStudentGroup,
    deleteStudentGroup,
    getStudentGroupById
}