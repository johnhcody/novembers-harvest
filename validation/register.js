const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    // if (!Validator.isEmail(data.email)) {
    //     errors.email = 'Email is invalid';
    // }
    

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};