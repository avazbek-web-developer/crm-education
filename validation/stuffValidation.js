const Joi = require('joi');

// validation for user Registration
const StuffregisterValidationSchema = Joi.object({
    first_name: Joi.string().required().trim().min(5).max(15),
    last_name: Joi.string().required().trim().min(6).max(15),
    phone_number: Joi.string().pattern(/^\+998\d{9}$/),
    login: Joi.string().required().trim().min(6).max(15)
        .pattern(/^(?=.*[a-zA-Z])(?=.*\d).{6,15}$/)
        .messages({
            'string.pattern.base': '"{#label}" must include both letters and numbers'
        }),
    parol: Joi.string().required().trim().min(6).max(15)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{6,}$/)
        .messages({
            'string.pattern.base': '"{#label}" must include capital letter, small letter, number, and any punctuation'
        }),
    is_active: Joi.boolean()
});

// validation for user Update
const StuffupdateValidationSchema = Joi.object({
    first_name: Joi.string().required().trim().min(5).max(15),
    last_name: Joi.string().required().trim().min(6).max(15),
    phone_number: Joi.string().pattern(/^\+998\d{9}$/),
    login: Joi.string().required().trim().min(6).max(15)
        .pattern(/^(?=.*[a-zA-Z])(?=.*\d).{6,15}$/)
        .messages({
            'string.pattern.base': '"{#label}" must include both letters and numbers'
        }),
    parol: Joi.string().required().trim().min(6).max(15)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{6,}$/)
        .messages({
            'string.pattern.base': '"{#label}" must include capital letter, small letter, number, and any punctuation'
        }),
    is_active: Joi.boolean()
});

module.exports = {
    StuffupdateValidationSchema,
    StuffregisterValidationSchema
};
