const AppData = require('./dataSource')
const { getConnection } = require('typeorm')
const { productsCategoryEnum, productsSizeEnum, productsTypeEnum, orderStatusEnum } = require('../models/enum')

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
             products_options_id
        FROM products`)
    return AllproductListData
}

const getProductsListByName = async(name) => {
    const productListDataByName = await AppData.query(
        `SELECT
            p.name,
            p.price,
            p.image,
            p.description,
            p.date,
            p.tag_id,
            p.category_id,
            p.products_options_id 
          FROM products AS p
            WHERE p.name = '%${name}%'`)
    return productListDataByName
}
 
const queryRunner = AppData.createQueryRunner()

const addCart = async(userId, productId, quantity, productSizeId, productTypeId) => {
        
    await queryRunner.connect();
    
    await queryRunner.startTransaction()
    try{
        const ordersData = await queryRunner.query(
            `INSERT INTO orders(
                customers_id,
                order_status_code_id
            ) VALUES (?, ?)
            `, [userId, orderStatusEnum.CART]
        )
        
        const orderProductsData = await queryRunner.query(
            `SELECT 
                p.price
             FROM products AS p 
             WHERE p.id=? 
                AND p.products_size_id =? 
                AND p.products_type_id=?`, [productId, productSizeId, productTypeId]
        )
        
        await queryRunner.query(
            `INSERT INTO order_items(
                orders_id,
                products_id,
                total_price_with_point,
                total_quantity,
                ) VALUES (?, ?, ?, ?)
                `, [ordersData.customers_id, productId, (orderProductsData.price*quantity), quantity]
            )
    
        await queryRunner.query(
            `SELECT
                o.orders_id,
                o.products_id,
                o.total_price_with_point,
                o.total_quantiy
              FROM order_items AS o
              LEFT JOIN orders WHERE orders.customers_id=?
              `, [userId]
        )
        await queryRunner.commitTransaction()
    }
    catch (err) {
        console.error(err)
        await queryRunner.rollbackTransaction()
    }
    finally{
        await queryRunner.release()
    }
}

const updateCart = async(updatedQuantity, productId, userId) => {

    await queryRunner.connect();
    
    await queryRunner.startTransaction()
    try{
    const ordersData = await queryRunner.query(
        `SELECT o.id
            FROM orders AS o
            WHERE o.customers_id=?`, [userId]
    )
    
    const updateOrderItems = await queryRunner.query(
        `UPDATE order_items
            SET total_quantity = ${updatedQuantity},
            WHERE products_id = ? AND orders_id = ?`, [productId, ordersData.id]
    )
    }
    catch{
        console.error(err)
        await queryRunner.rollbackTransaction()
    }
    finally{
        await queryRunner.release()
    }
}

module.exports = { getAllProducts, getProductsListByName, addCart, updateCart }