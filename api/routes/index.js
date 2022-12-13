const express = require('express')
const router = express.Router();

const userRouter = require('./userRouter')
const productRouter = require('./productRouter')

router.use('/users', userRouter)
router.use('/products', productRouter)
router.use('/cart', productRouter)

module.exports = router