const express = require('express');
const qualificationController = require('./../controllers/tourController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/postOrUpdateQualification').post(
    authController.protect,
    qualificationController.uploadOrUpdateQualification
);

router.route('/getQualification').get(
    qualificationController.getQualificationInfo
)


module.exports = router;