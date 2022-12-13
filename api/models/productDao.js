const AppData = require('./dataSource')

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

const getConnection = require('typeorm')

const connection = getConnection();
const queryRunner = connection.createQueryRunner()
await queryRunner.connect(AppData);

const orderStatusEnum = {
    "CART": 1,
    "IN_TRANSIT" : 2
    }

const addCart = async(userId, productId, quantity) => {

    // typeorm transaction method를 도입한다
    // transaction은 queryrunner를 함께 사용.
    //
    const ordersData = await queryRunner.query(
        `INSERT INTO orders(
            customers_id,
            order_status_code_id
        ) VALUES (?, ?)
        `, [userId, orderStatusEnum.CART]
    )
    
    // products_id는 이미 주고 받은 상태이기 때문에, 프론트로부터 products_id를 받을 수 있다.
    const orderProductsData = await AppData.query(
        `SELECT p.price FROM products AS p WHERE p.id=?`, [productId]
    )

    await queryRunner.query(
        `INSERT INTO order_items(
            orders_id,
            products_id,
            total_price_with_point,
            total_quantity
            ) VALUES (?, ?, ?, ?)
            `, [ordersData.id, productId, (orderProductsData.price*quantity), quantity]
        )

    const AllCartData = await queryRunner.query(
        `SELECT
            o.orders_id,
            o.products_id,
            o.total_price_with_point,
            o.total_quantiy
          FROM order_items AS o
          LEFT JOIN orders WHERE orders.customers_id=?
          `, [userId]
    )
    
    return AllCartData;
}

module.exports = { getAllProducts, getProductsListByName, addCart }