const express = require('express');

const { paymentController } = require('../controllers')
const { loginRequired } = require('../utils/auth')

const router = express.Router();

router.get('/pre-information', loginRequired, paymentController.getPrePaymentInfo)
router.get('/paid-information', loginRequired, paymentController.getPaidInformation)


module.exports = router 