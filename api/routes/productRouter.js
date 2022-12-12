const express = require('express');

const { productController } = require('../controllers')

const router = express.Router();

router.post('/', productController.addCart)

module.exports = router
