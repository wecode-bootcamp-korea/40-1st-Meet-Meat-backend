const { productDao } = require('../models')

const getAllProducts = async () => {
    const productListData = await productDao.getAllProducts()
    return productListData
}

const getProductsDataBycategoryId = async(categories_id) => {
    const productDataBycategoryId = await productDao.getProductsDataBycategoryId(categories_id)
    return productDataBycategoryId
}

module.exports = { getAllProducts, getProductsDataBycategoryId }