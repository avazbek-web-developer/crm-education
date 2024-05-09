const { Branch } = require("../model/branch.modules")

// ----------------Get Branch---------------------
const getBranch = async (req, res) => {
    try {
        const branch = await Branch.find({});
        res.json({ success: true, message: "All branches are found.", innerData: branch });
    } catch (error) {
        console.error("Error fetching stages:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Foydalanuvchilarni olishda xato yuz berdi." });
    }
};

// ----------------Branch register-------------------
const postBranchRegister = async (req, res) => {
    try {
        const {
            branch_name,
            address,
            call_number
        } = req.body;
        const newBranch = new Branch({
            branch_name,
            address,
            call_number
        });
        await newBranch.save();
        return res.status(201).json({
            success: true,
            message: "Branch successfully registered"
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update Branch--------------------
const updateBranch = async (req, res) => {
    try {
        const { id } = req.params;
        const updateBranch = await Branch.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateBranch) {
            return res.status(404).json({
                success: false,
                message: 'Branch is not found!',
            });
        }
        res.json({
            success: true,
            message: 'Branch updated successfully!',
            car: updateBranch,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};
// ---------------Delete Branch--------------
const deleteBranch = async (req, res) => {
    try {
        const BranchId = req.params.id
        let deletedBranch = await Branch.findByIdAndDelete(BranchId);
        if (!deletedBranch) {
            return res.json({
                success: false,
                message: "Branch is not deleted!",
                deletedBranch
            })
        }
        res.json({
            success: true,
            message: "Branch is deleted!",
        })
    } catch (error) {
        res.json({ success: false, message: error })
    }
}

// ------------get Branch by id-----------------
const getBranchById = async (req, res) => {
    try {
        const BranchId = req.params.id;
        const branch = await Branch.findById(BranchId);
        if (!branch) {
            return res.status(404).json({
                message: "Branch is not found",
            });
        }
        res.json({ message: "Branch is found", branch });
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
    getBranch,
    postBranchRegister,
    deleteBranch,
    updateBranch,
    getBranchById

}