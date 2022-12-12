const { productService } = require('../services')

const getProductsList = async(req, res) => {
    const productListData = await productService.getProductsList()
    res.status(200).json(productListData)
}

const getProductsListByName = async(req, res) => {
    const productListByName = await productService.getProductsListByName(req.params.name)
    res.status(200).json(productListByName)
}

module.exports = { getProductsList, getProductsListByName }