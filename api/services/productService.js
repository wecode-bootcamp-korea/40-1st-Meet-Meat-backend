const { productDao } = require('../models')

const addCart = async(userId, productName) => {
    const addCartByUserId = await productDao.addCart(userId, productName)
    return addCartByUserId
}

module.exports = { addCart }