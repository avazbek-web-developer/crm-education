const { Schema, model } = require("mongoose");
const { Student } = require('./student.modules')
const PaymentSchema = new Schema({
    student_id: {
        type: Schema.Types.ObjectId, ref: Student
    },
    payment_last_date: {
        type: Date,
        required: true,
        trim: true
    },
    payment_date: {
        type: Date,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    is_paid: {
        type: Boolean,

    },
    total_attent: {
        type: Number,
        required: true,
        trim: true
    }
});

const Payment = model('payment', PaymentSchema);
module.exports = { Payment };
