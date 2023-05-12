const express = require('express')
// import authController from '../controllers/authController'
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);


module.exports = router;
// export default router