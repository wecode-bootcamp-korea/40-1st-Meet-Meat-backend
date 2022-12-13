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
const { productService } = require('../services')
const { catchAsync } = require('../utils/error')

const addCart = catchAsync(async(req, res) => {
    const { userId }= req.user
    const { productId, quantity } = req.body

    const addCartByUserId = await productService.addCart(userId, productId, quantity)
    res.status(200).json({ message : addCartByUserId })
})

module.exports = { getAllProducts, getProductsListByName, addCart }