const { productService } = require('../services')
const { catchAsync } = require('../utils/error')

const addCart = catchAsync(async(req, res) => {
    const { userId }= req.user
    const productName = req.params.name

    const addCartByUserId = await productService.addCart(userId, productName)
    res.status(200).json({ message : addCartByUserId })
})

module.exports = { addCart }