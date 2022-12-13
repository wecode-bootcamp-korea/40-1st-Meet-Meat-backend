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

module.exports = { getAllProducts, getProductsListByName }