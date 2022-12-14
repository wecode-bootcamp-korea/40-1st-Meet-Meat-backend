const AppData = require('./dataSource');

const getTotalPayment = async (id) =>{
    const result = await AppData.query(
      `
      
       `,[id]
    )
    
        return result;
}

module.exports = { getTotalPayment }