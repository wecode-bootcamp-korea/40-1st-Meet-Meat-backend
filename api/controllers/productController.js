const { productService } = require('../services')
const { catchAsync } = require('../utils/error')

const addCart = catchAsync(async(req, res) => {
    const { userId }= req.user
    const { productId, quantity } = req.body

    const addCartByUserId = await productService.addCart(userId, productId, quantity)
    res.status(200).json({ message : addCartByUserId })
})

module.exports = { addCart }