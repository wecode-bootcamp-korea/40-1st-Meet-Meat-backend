const AppData = require('./dataSource')

const getProductsList = async () => {
    const productListData = await AppData.query(`SELECT*FROM products`)
    console.log(productListData)
    return productListData
}

const getProductsListByName = async(name) => {
    const productListDataByName = await AppData.query(`SELECT * FROM products WHERE products.name = '%${name}%'`)
    return productListDataByName
}

module.exports = { getProductsList, getProductsListByName }