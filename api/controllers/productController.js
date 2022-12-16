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

const getProductById = catchAsync(async(req, res) => {
    const productId = req.params.productId
    const productDetail = await productService.getProductById(productId)
    res.status(200).json(productDetail)
})

module.exports = { 
    getAllProducts, 
    getProductsListByName, 
    getProductById
}