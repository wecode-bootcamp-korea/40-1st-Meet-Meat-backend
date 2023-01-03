const { productService } = require('../services')
const { catchAsync } = require('../utils/error')

const getAllProducts = catchAsync(async(req, res) => {
    const productListData = await productService.getAllProducts()
    res.status(200).json(productListData)
})

const getProductsDataBycategoryId = catchAsync(async(req, res) => {
    const productDataBycategoryId = await productService.getProductsDataBycategoryId(req.query.categories_id)
    res.status(200).json(productDataBycategoryId)
})

module.exports = { getAllProducts, getProductsDataBycategoryId }