const express = require('express');

const { pointController } = require('../controllers')
const { loginRequired } = require('../utils/auth')

const router = express.Router();

router.get('/:customersId', loginRequired, pointController.getPoint)

module.exports = router 