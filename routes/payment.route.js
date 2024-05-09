const { Router } = require('express');
const payment = Router();

const {
    deletePayment,
    getPayment,
    getPaymentById,
    postPaymentRegister,
    updatePayment
} = require('../controllers/payment.controller');

payment.post('/postPaymentRegister', postPaymentRegister);
payment.get('/getPayment', getPayment)
payment.put('/updatePayment/:id', updatePayment);
payment.delete('/deletePayment/:id', deletePayment);
payment.get('/getPaymentById/:id', getPaymentById);

module.exports = { payment }