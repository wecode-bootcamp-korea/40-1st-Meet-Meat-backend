const express = require('express')
const router = express.Router();

const userRouter = require('./userRouter')
const pointRouter = require('./pointRouter')

router.use('/users', userRouter)
router.use('/payments', pointRouter)

module.exports = router;