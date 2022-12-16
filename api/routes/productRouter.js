const express = require('express')

const { productController } = require('../controllers');
const { loginAuthorization } = require('../utils/auth');

const router = express.Router();

router.get('/', loginAuthorization, productController.getAllProducts)

router.get('/name/:name', loginAuthorization, productController.getProductsListByName) 
router.get('/:productId', loginAuthorization, productController.getProductById) 

module.exports = router
