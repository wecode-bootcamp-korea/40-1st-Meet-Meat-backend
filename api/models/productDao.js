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
             categories_id,
             products_size_id,
             products_type_id
        FROM products`)
    return AllproductListData
}

const getProductsDataBycategoryId = async(categories_id) => {

    const productDataBycategoryId = await AppData.query(
        `SELECT
            p.name,
            p.price,
            p.image,
            p.description,
            p.date,
            p.tag_id,
            p.categories_id,
            p.products_options_id 
          FROM products AS p
            WHERE p.categories_id =?`, [categories_id]
            )
    return productDataBycategoryId
}

module.exports = { getAllProducts, getProductsDataBycategoryId }