const { Payment } = require('../model/payment.modules');

// ----------------Get Payment---------------------
const getPayment = async (req, res) => {
    try {
        const payment = await Payment.find({});
        res.json({ success: true, message: "All Payments  are found.", innerData: payment });
    } catch (error) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Foydalanuvchilarni olishda xato yuz berdi." });
    }
};

// ----------------Payment register-------------------
const postPaymentRegister = async (req, res) => {
    try {
        const {
            student_id,
            payment_last_date,
            payment_date,
            price,
            is_paid,
            total_attent
        } = req.body;
        const newPayment = new Payment({
            student_id,
            payment_last_date,
            payment_date,
            price,
            is_paid,
            total_attent
        });
        await newPayment.save();
        return res.status(201).json({
            success: true,
            message: "Payment is successfully registered."
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({ success: false, message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi." });
    }
};
// -------------------Update Payment--------------------
const updatePayment = async (req, res) => {
    try {
        const { id } = req.params;
        // Update user in the database
        const updatePayment = await Payment.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatePayment) { // Corrected variable name
            return res.status(404).json({
                success: false,
                message: 'Payment is not found!',
            });
        }
        res.json({
            success: true,
            message: 'Payment is updated successfully!',
            Payment: updatePayment,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};

// ---------------DELETE Payment--------------
const deletePayment = async (req, res) => {
    try {
        const PaymentId = req.params.id
        let deletedPayment = await Payment.findByIdAndDelete(PaymentId);
        if (!deletedPayment) {
            return res.json({
                success: false,
                message: "Payment is not deleted!",
                deletedPayment
            })
        }
        res.json({
            success: true,
            message: "Payment is deleted!",
        })
    } catch (error) {
        res.json({ success: false, message: error })
    }
}

// ------------get Payment by id-----------------
const getPaymentById = async (req, res) => {
    try {
        const PaymentID = req.params.id;
        const payment = await Payment.findById(PaymentID).populate('student_id');
        if (!payment) {
            return res.status(404).json({
                message: "Payment is not found",
            });
        }
        res.json({ message: "Payment is found", payment });
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
    getPayment,
    getPaymentById,
    deletePayment,
    updatePayment,
    postPaymentRegister
}