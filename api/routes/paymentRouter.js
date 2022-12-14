const express = require('express');

const { paymentController } = require('../controllers')
const { loginRequired } = require('../utils/auth')

const router = express.Router();

router.get('/:customerId', loginRequired, paymentController.getPayment)

module.exports = router 