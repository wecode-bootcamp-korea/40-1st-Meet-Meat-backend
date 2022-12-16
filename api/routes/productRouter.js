const express = require('express')

const { productController } = require('../controllers');
const { loginAuthorization } = require('../utils/auth');

const router = express.Router();

router.get('/'/*, loginAuthorization*/, productController.getAllProducts) // products

router.get('/name/:name'/*, loginAuthorization*/, productController.getProductsListByName) // products/pork
router.get('/:productId'/*, loginAuthorization*/, productController.getProductById) // detail -> 구현해야 됨

module.exports = router
