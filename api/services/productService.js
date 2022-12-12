const { productDao } = require('../models')

const addCart = async(userId) => {
    const addCartByUserId = await productDao.addCart(userId)
    return addCartByUserId
}

module.exports = { addCart }