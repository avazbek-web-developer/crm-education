const { Router } = require('express');
const stuffs = Router();
const {
    deleteStuff,
    getStuff,
    getStuffById,
    postStuffRegister,
    updateStuff
} = require('../controllers/stuff.controller');

const { StuffregisterValidationSchema, StuffupdateValidationSchema } = require('../validation/stuffValidation')

const validateSchema = (schema) => (req, res, next) => {
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
        return res.status(400).send(validationResult.error.details[0].message);
    }
    next();
};

stuffs.post('/postStuffRegister', validateSchema(StuffregisterValidationSchema), postStuffRegister);
stuffs.get('/getStuff', getStuff)
stuffs.put('/updateStuff/:id', updateStuff);
stuffs.delete('/deleteStuff/:id', validateSchema(StuffupdateValidationSchema), deleteStuff);
stuffs.get('/getStuffById/:id', getStuffById);

module.exports = { stuffs }