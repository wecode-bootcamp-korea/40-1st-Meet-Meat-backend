const AppData = require('./dataSource');

const getTotalPayment = async (userId) =>{
    const result = await AppData.query(
      `
      SELECT orders.customers_id, total_price 
      FROM order_items 
      JOIN orders
      ON orders_id=orders.id
      WHERE customers_id = ?
      `,[userId]
    )
        return result;
}


module.exports = { getTotalPayment }