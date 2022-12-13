const express = require('express')
const router = express.Router();

const userRouter = require('./userRouter')
const pointRouter = require('./pointRouter')
const productRouter = require('./productRouter')

router.use('/users', userRouter)
router.use('/payments', pointRouter)
router.use('/products', productRouter)

module.exports = router;