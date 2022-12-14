const AppData = require('./dataSource')
const { getConnection } = require('typeorm')

const orderStatusEnum = {
    "CART": 1,
    "IN_TRANSIT" : 2
    }

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

const addCart = async(userId, productId, quantity, productOption) => {
        
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
                p.
             FROM products AS p WHERE p.id=?`, [productId]
        )
    
        await queryRunner.query(
            `INSERT INTO order_items(
                orders_id,
                products_id,
                total_price_with_point,
                total_quantity,
                order_item_status_code
                ) VALUES (?, ?, ?, ?, ?)
                `, [ordersData.id, productId, (orderProductsData.price*quantity), quantity, productOption]
            )
    
        await queryRunner.query(
            `SELECT
                o.orders_id,
                o.products_id,
                o.total_price_with_point,
                o.total_quantiy,
                o.order_item_status_code
              FROM order_items AS o
              LEFT JOIN orders WHERE orders.customers_id=?
              `, [userId]
        )
        await queryRunner.commitTransaction()
    }
    catch{
        console.error(err)
        await queryRunner.rollbackTransaction()
    }
    finally{
        await queryRunner.release()
    }
}

const updateCart = async(updatedQuantity, productId, userId) => {

    const ordersData = await AppData.query(
        `SELECT o.id
            FROM orders AS o
            WHERE o.customers_id=?`, [userId]
    )
    
    const updateOrderItems = await AppData.query(
        `UPDATE order_items
            SET total_quantity = ${updatedQuantity},
            WHERE products_id = ? AND orders_id = ?`, [productId, ordersData.id]
    )
    return updateOrderItems
}

module.exports = { getAllProducts, getProductsListByName, addCart, updateCart }