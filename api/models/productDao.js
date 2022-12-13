const AppData = require('./dataSource')

const addCart = async(userId, productName) => {
    const data = [];
    
    const ordersData = await AppData.query(
        `INSERT INTO orders(
            customers_id,
        )`
    )
        
    const porkData = await AppData.query(
        `INSERT INTO order_itmes(
            orders_id,
            products_id,
            total_price_with_point,
            total_quantity
            ) VALUES (?, ?, ?, ?)
            `, [userId, ]
        )
    const beefData = await AppData.query(
        `np`
        )

    const chickentData = await AppData.query(
        ``
        )

    data.push(porkData, beefData, chickentData)
    return data;
}

module.exports = { addCart }