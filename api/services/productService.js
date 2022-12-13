const { productDao } = require('../models')

const getAllProducts = async () => {
    const productListData = await productDao.getAllProducts()
    return productListData
}

const getProductsListByName = async(name) => {
    const productListByName = await productDao.getProductsListByName(name)
    return productListByName
}

module.exports = { getAllProducts, getProductsListByName }