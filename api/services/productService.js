const { productDao } = require('../models')

const getAllProducts = async () => {
    const productListData = await productDao.getAllProducts()
    return productListData
}

const getProductsListByName = async(name) => {
    const productListByName = await productDao.getProductsListByName(name)
    return productListByName
}

const getProductById = async(productId) => {
    console.log(productId)
    const productDetail = await productDao.getDetail(productId)
    return productDetail
}

module.exports = { getAllProducts, getProductsListByName, getProductById }