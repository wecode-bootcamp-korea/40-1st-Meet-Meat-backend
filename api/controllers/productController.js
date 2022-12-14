const { productService } = require('../services')
const { catchAsync } = require('../utils/error')

const getAllProducts = catchAsync(async(req, res) => {
    const productListData = await productService.getAllProducts()
    res.status(200).json(productListData)
})

const getProductsListByName = catchAsync(async(req, res) => {
    const productListByName = await productService.getProductsListByName(req.params.name)
    res.status(200).json(productListByName)
})

const addCart = catchAsync(async(req, res) => {
    const { userId }= req.user
    const { productId, quantity, productSizeId, productTypeId} = req.body

    const addCartByUserId = await productService.addCart(userId, productId, quantity, productSizeId, productTypeId)
    res.status(200).json({ message : addCartByUserId })
})

const updateCart = catchAsync(async(req, res) => {
    const { updatedQuantity, productId, userId } = req.body
    const updateCart = await productService.updateCart(updatedQuantity, productId, userId)
    res.status(204).json({ message : 'DATA_UPDATE_COMPLETED' })
})

module.exports = { getAllProducts, getProductsListByName, addCart, updateCart }