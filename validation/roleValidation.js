const Joi = require('joi')

// validation for user Registration
const RoleregisterValidationSchema = Joi.object({
    name: Joi.string().required().trim().min(6).max(15),
})

// validation for user Update


const RoleupdateValidationSchema = Joi.object({
    name: Joi.string().required().trim().min(8).max(20),

})

module.exports = {
    RoleupdateValidationSchema,
    RoleregisterValidationSchema
}