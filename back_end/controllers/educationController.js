const catchAsync = require('./../utils/catchAsync');
const Education = require('./../models/educationModel')
const AppError = require('./../utils/appError');

exports.getEducationInfo = catchAsync(async(req, res, next) => {
    const existEducation = await Education.findOne({user: req.query.id})
    if (!existEducation) {
        return next(new AppError('No Education Info for Current User', 404));
    } else {
        res.status(200).json({
            status: 'success',
            data: existEducation
        })
    }
})

exports.createEducationInfo = catchAsync(async(req, res, next) => {
    const existEducation = await Education.findOne({user: req.query.id})
    if (!existEducation) {
        return next(new AppError('Qualification already exists', 400))
    } else {
        const newEducation= await Education.create(req);
        res.status(201).json({
            status: 'success',
            data: newEducation
        })
    }
})

exports.uploadEducationInfo = catchAsync(async(req, res, next) => {
    
})