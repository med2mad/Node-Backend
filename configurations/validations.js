const { body, query, param, validationResult } = require('express-validator');

const querySanitizer = function () {
    return [query('_name').trim().default(''), query('_age').default(undefined), query('selectedPhotoName').trim().default(''), query('_skip').default(undefined), query('_limit').default(undefined)];
}

const idValidation = function () {
    return [
        param('id').trim().isInt(),
        (req, res, next)=>{
            if(validationResult(req).isEmpty()){ next(); }else{ res.send({"errors":validationResult(req).errors}); }
        }
    ];
}
const mongooseIdValidation = function () {
    return [
        param('id').trim().notEmpty(),
        (req, res, next)=>{
            if(validationResult(req).isEmpty()){ next(); }else{ res.send({"errors":validationResult(req).errors}); }
        }
    ];
}
const bodyValidation = function () {
    return [
        body('name').trim().isLength({min:1, max:30}),
        body('age').trim().default('').isInt({min:18, max:99}),
        (req, res, next)=>{
            if(validationResult(req).isEmpty()){ next(); }else{ res.send({"errors":validationResult(req).errors}); }
        }
    ];
}
const signupValidation = function () {
    return [
        body('username').trim().isLength({min:5, max:20}),
        body('password').trim().isLength({min:5, max:20}),
        body('password_confirmation').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        }),
        (req, res, next)=>{
            if(validationResult(req).isEmpty() ){ next(); }else{ res.send({"errors":validationResult(req).errors}); }
        }
    ];
}

module.exports = { bodyValidation, signupValidation, querySanitizer, idValidation, mongooseIdValidation };