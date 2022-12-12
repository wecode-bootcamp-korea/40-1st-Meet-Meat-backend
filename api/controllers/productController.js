const { productService } = require('../services')
const { catchAsync } = require('../utils/error')

const addCart = catchAsync(async(req, res) => {
    const userId = req.body.userId

    const addCartByUserId = await productService.addCart(userId)
    res.status(200).json({ message : addCartByUserId })
})

module.exports = { addCart }