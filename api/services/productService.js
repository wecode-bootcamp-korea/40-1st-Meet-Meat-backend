const { productDao } = require('../models')

const getProductsList = async () => {
    const productListData = await productDao.getProductsList()
    return productListData
}

const getProductsListByName = async(name) => {
    const productListByName = await productDao.getProductsListByName(name)
    return productListByName
}

module.exports = { getProductsList, getProductsListByName }