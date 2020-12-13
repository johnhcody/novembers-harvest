const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';

    if (Validator.isEmpty(data.title)) {
        errors.text = 'Your post needs to have a title.';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};