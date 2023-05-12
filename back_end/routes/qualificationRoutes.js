const express = require('express');
const qualificationController = require('./../controllers/qualificationController');

const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/createQualification').post(
    authController.protect,
    qualificationController.createQualification
);


router.route('/updateQualification').put(
    authController.protect,
    qualificationController.updateQualification
);

router.route('/getQualification').get(
    qualificationController.getQualificationInfo
)


module.exports = router;