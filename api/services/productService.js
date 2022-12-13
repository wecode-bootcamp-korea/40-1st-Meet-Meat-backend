const { productDao } = require('../models')

const getAllProducts = async () => {
    const productListData = await productDao.getAllProducts()
    return productListData
}

const getProductsListByName = async(name) => {
    const productListByName = await productDao.getProductsListByName(name)
    return productListByName
}

const addCart = async(userId, productId, quantity) => {
    const addCartByUserId = await productDao.addCart(userId, productId, quantity)
    return addCartByUserId
}

module.exports = { getAllProducts, getProductsListByName, addCart }