const AppData = require('./dataSource')
const { getConnection } = require('typeorm')
const { productsCategoryEnum, productsSizeEnum, productsTypeEnum, orderStatusEnum, detailEnum } = require('../models/enum')

const getAllProducts = async () => {
    const AllproductListData = await AppData.query(
        `SELECT
             name,
             price,
             image,
             description,
             date,
             tag_id,
             category_id,
             products_size_id,
             products_type_id
        FROM products`)
    return AllproductListData
}

const getProductsListByName = async(name) => {
        if(name === 'pork'){
            const porkImageData = await AppData.query(`SELECT
                p.id,
                p.name,
                p.price,
                p.image,
                p.description,
                p.date,
                p.tag_id,
                p.category_id,
                products_size_id,
                products_type_id
            FROM products AS p
                WHERE p.category_id = ?`, [productsCategoryEnum.PORK])
                
                return porkImageData}
        if(name === 'beef'){
            const beefImageData = await AppData.query(`SELECT
                p.id,
                p.name,
                p.price,
                p.image,
                p.description,
                p.date,
                p.tag_id,
                p.category_id,
                products_size_id,
                products_type_id
            FROM products AS p
                WHERE p.category_id = ?`, [productsCategoryEnum.BEEF])
            return beefImageData
        }
        if(name === 'chicken'){
            const chickenImageData = await AppData.query(`SELECT
                p.id,
                p.name,
                p.price,
                p.image,
                p.description,
                p.date,
                p.tag_id,
                p.category_id,
                products_size_id,
                products_type_id
            FROM products AS p
                WHERE p.category_id = ?`, [productsCategoryEnum.CHICKEN])
            return chickenImageData
        }
        if(name === 'duck'){
            const duckImageData = await AppData.query(`SELECT
                p.id,
                p.name,
                p.price,
                p.image,
                p.description,
                p.date,
                p.tag_id,
                p.category_id,
                products_size_id,
                products_type_id
            FROM products AS p
                WHERE p.category_id = ?`, [productsCategoryEnum.DUCK])
            return duckImageData
        }
}

const getDetail = async(productId) => {
    const getProductDetailByProductId = await AppData.query(
        `SELECT 
            name,
            price,
            image,
            description,
            date,
            tag_id,
            category_id,
            products_size_id,
            products_type_id
          FROM products
          WHERE id = ?`, [productId]
    )

    return getProductDetailByProductId
}

module.exports = { 
    getAllProducts, 
    getProductsListByName, 
    getDetail
}
