const express = require('express')

const { productController } = require('../controllers')

const router = express.Router();

router.get('/', productController.getProductsList)
router.get('/:name', productController.getProductsListByName)

module.exports = router