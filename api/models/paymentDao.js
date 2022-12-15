const AppData = require('./dataSource');

const getTotalPayment = async (user) =>{
    const result = await AppData.query(
      `
      SELECT
        customers_id,
        sum(total_price) as sum
      FROM order_items
      JOIN orders
      ON order_items.orders_id = orders.id
      WHERE customers_id = ? 
      `,[user.id]
    )
    
    const getPointByUserId = await AppData.query(
      `
      SELECT point
      FROM customers
      WHERE id =?
      `,[user.id]
    )
    const sumpoint = getPointByUserId[0].point - result[0].sum
    
    await AppData.query(
      `
      UPDATE customers
      SET point = ?
      WHERE id = ?
      `,[sumpoint,user.id]
    )
    
    await AppData.query(
      `
      UPDATE orders
      SET order_status_code_id = 1
      WHERE order_status_code_id = 3
      `,[user.id]
    )

    return sumpoint;

}

const getPaymentInFo = async (user)=>{
  const customerInfo = await AppData.query(
    `
    SELECT
      id,
      name,
      email,
      address_default,
      point
    FROM customers
    WHERE id = ?
    `,[user.id]
  )

  const cartInfo = await AppData.query(
    `
    SELECT DISTINCT customers_id,products_id,total_price,total_quantity
    FROM(
          SELECT
                products_id,
                total_price,
                total_quantity
              FROM order_items) as itemtable
    JOIN orders
    ON customers_id = ?
    `,[user.id]
  )
  return [customerInfo,cartInfo]
  }




module.exports = { 
  getTotalPayment,
  getPaymentInFo
}




