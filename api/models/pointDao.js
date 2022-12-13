const AppData = require('./dataSource');

const getTotalpoint = async (id) =>{
    const result = await AppData.query(
       `
       SELECT 
            orders_id, 
            orders.customers_id, 
            total_price_with_point
       FROM order_items
       LEFT JOIN orders
       ON order_items.orders_id = orders.id where customers_id =?
       `,[id]
    )
    
        return result;
}

module.exports = { getTotalpoint }