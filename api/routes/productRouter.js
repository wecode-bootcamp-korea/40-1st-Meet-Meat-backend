const express = require('express')

const { productController } = require('../controllers');
const { loginAuthorization } = require('../utils/auth');

const router = express.Router();

router.get('/', loginAuthorization, productController.getAllProducts)
router.get('/:name', loginAuthorization, productController.getProductsListByName)
router.post('/', loginAuthorization, productController.addCart)
router.patch('/', productController.updateCart)

module.exports = router
