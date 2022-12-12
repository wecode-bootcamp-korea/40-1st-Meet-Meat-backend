const AppData = require('./dataSource')

const addCart = async(userId) => {
    const data = [];
    
    const porkData = await AppData.query(
        `SELECT 
            orders.customers_id,
            orders.order_status_code_id,
            orders.detail,
            order_items.
          JOIN order_items ON `
        )
    const beefData = await AppData.query(
        ``
        )

    const chickentData = await AppData.query(
        ``
        )

    data.push(porkData, beefData, chickentData)
    return data;
}

module.exports = { addCart }