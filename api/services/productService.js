const { productDao } = require('../models')

const addCart = async(userId, productId, quantity) => {
    const addCartByUserId = await productDao.addCart(userId, productId, quantity)
    return addCartByUserId
}

module.exports = { addCart }