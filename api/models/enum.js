const productsCategoryEnum = Object.freeze({
    "PORK": 1,
    "BEEF": 2,
    "CHICKEN": 3,
    "DUCK": 4
})

const productsSizeEnum = Object.freeze({
    "THIN": 1,
    "DEFAULT": 2,
    "THINK": 3
})

const productsTypeEnum = Object.freeze({
    "GRILLED": 1,
    "STEAMED": 2
})

const orderStatusEnum = Object.freeze({
    "CART": 1,
    "IN_TRANSIT" : 2
    })

module.exports = { productsCategoryEnum, productsSizeEnum, productsTypeEnum, orderStatusEnum }