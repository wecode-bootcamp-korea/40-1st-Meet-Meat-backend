const express = require('express')
const router = express.Router();

const userRouter = require('./userRouter')
const paymentRouter = require('./paymentRouter')
const productRouter = require('./productRouter')

router.use('/users', userRouter)
router.use('/payments', paymentRouter)
router.use('/products', productRouter)

module.exports = router;