const { Student } = require('../model/student.modules');

// ----------------Get Student---------------------
const getStudent = async (req, res) => {
    try {
        const student = await Student.find({});
        res.json({ success: true, message: "All students are found.", innerData: student });
    } catch (error) {
        console.error("Error fetching stages:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Foydalanuvchilarni olishda xato yuz berdi." });
    }
};

// ----------------Student register-------------------
const postStudentRegister = async (req, res) => {
    try {
        const {
            lid_id,
            first_name,
            last_name,
            phone_number,
            birthday,
            gender
        } = req.body;
        const newStudent = new Student({
            lid_id,
            first_name,
            last_name,
            phone_number,
            birthday,
            gender

        });
        await newStudent.save();
        return res.status(201).json({
            success: true,
            message: "Student is successfully registered"
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update Student--------------------
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const updateStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateStudent) {
            return res.status(404).json({
                success: false,
                message: 'Student is not found!',
            });
        }
        res.json({
            success: true,
            message: 'Student updated successfully!',
            car: updateStudent,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};
// ---------------Delete Student--------------
const deleteStudent = async (req, res) => {
    try {
        const StudentId = req.params.id
        let deletedStudent = await Student.findByIdAndDelete(StudentId);
        if (!deletedStudent) {
            return res.json({
                success: false,
                message: "Student is not deleted!",
                deletedStudent
            })
        }
        res.json({
            success: true,
            message: "Student is deleted!",
        })
    } catch (error) {
        res.json({ success: false, message: error })
    }
}

// ------------get Student by id-----------------
const getStudentById = async (req, res) => {
    try {
        const StudentID = req.params.id;
        const student = await Student.findById(StudentID).populate("lid_id");
        if (!student) {
            return res.status(404).json({
                message: "Student is not found",
            });
        }
        res.json({ message: "Student is found", student });
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
    postStudentRegister,
    updateStudent,
    getStudent,
    getStudentById,
    deleteStudent
}