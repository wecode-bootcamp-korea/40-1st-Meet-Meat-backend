const express = require('express')

const { productController } = require('../controllers')

const router = express.Router();

router.get('/', productController.getAllProducts)
router.get('/:name', productController.getProductsListByName)
router.post('/', productController.addCart)

module.exports = router

module.exports = router