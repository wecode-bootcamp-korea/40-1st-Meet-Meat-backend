const { SimpleConsoleLogger } = require('typeorm');
const AppData = require('./dataSource');

const getTotalPayment = async (userId) =>{
    const result = await AppData.query(
      `
      SELECT
        customers_id,
        sum(total_price) as sum
      FROM order_items
      JOIN orders
      ON order_items.orders_id = orders.id
      WHERE customers_id = ? 
      `,[userId]
    )
    
    const getPointByUserId = await AppData.query(
      `
      SELECT point
      FROM customers
      WHERE id =?
      `,[userId]
    )
    const sumpoint = getPointByUserId[0].point - result[0].sum
    
    await AppData.query(
      `UPDATE customers
      SET point = ?
      WHERE id = ?
      `,[sumpoint,userId]
    )

    return sumpoint;

}



module.exports = { getTotalPayment }




