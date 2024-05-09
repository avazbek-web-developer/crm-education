const { Router } = require('express');
const roles = Router();

const {
    postRoleRegister,
    getRole,
    updateRole,
    deleteRole,
    getRoleById
} = require('../controllers/role.controller');

const { RoleregisterValidationSchema, RoleupdateValidationSchema } = require('../validation/roleValidation')

const validateSchema = (schema) => (req, res, next) => {
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
        return res.status(400).send(validationResult.error.details[0].message);
    }
    next();
};

roles.post('/postRoleRegister', validateSchema(RoleregisterValidationSchema), postRoleRegister);
roles.get('/getRole', getRole)
roles.put('/updateRole/:id', validateSchema(RoleupdateValidationSchema), updateRole);
roles.delete('/deleteRole/:id', deleteRole);
roles.get('/getRoleById/:id', getRoleById);

module.exports = { roles }