const catchAsync = require('./../utils/catchAsync');
const Qualification = require('./../models/qualificationModel')
const AppError = require('./../utils/appError');

exports.updateQualification = catchAsync(async(req, res, next) => {
    const existQualification = await Qualification.findOne({user: req.body.id}).select('_id')
    if (existQualification) {
        const updatedQualification = await Qualification.findByIdAndUpdate(existQualification, {
            categories: req.body.categories,
        });
        res.status(204).json({
            status: 'success',
            data: updatedQualification
        })
    } else {
        return next(new AppError('Qualification for curuser does not exists', 400));
    }
})

exports.createQualification = catchAsync(async(req, res, next) => {
    const existQualification = await Qualification.findOne({user: req.body.id}).select('_id')
    if (existQualification) {
        return next(new AppError('Qualification already exists', 400));
    } else {
        const newQualification = await Qualification.create({
            categories: req.body.categories,
            user: req.body.id
        });
        res.status(201).json({
            status: 'success',
            data: newQualification
        })
    }
})

exports.getQualificationInfo = catchAsync(async(req, res, next) => {
    const existQualification = await Qualification.findOne({user: req.query.id})
    if (!existQualification) {
        return next(new AppError('No Qualification Info for Current User', 404));
    } else {
        res.status(200).json({
            status: 'success',
            data: existQualification
        })
    }
})