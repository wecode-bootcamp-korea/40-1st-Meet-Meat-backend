const { DataSource } = require('typeorm');
const csvToJson = require('convert-csv-to-json')

const AppData = new DataSource({
    type: process.env.TYPEORM_TYPE,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE
})

AppData.initialize()
    .then(() => {
        console.log("Data Source has been initialized")
        // const userMockData =
        //     csvToJson.fieldDelimiter(',').getJsonFromCsv('MOCK_DATA_userdata.csv');
        //     for(let i=0; i<userMockData.length; i++){
        //         AppData.query(
        //             `INSERT INTO customers(
        //                 name,
        //                 email,
        //                 password,
        //                 address_default,
        //                 address_second,
        //                 point
        //             ) VALUES (?, ?, ?, ?, ?, ?)
        //             `, [userMockData[i].name,
        //                 userMockData[i].email,
        //                 userMockData[i].password,
        //                 userMockData[i].address_default,
        //                 userMockData[i].address_second,
        //                 userMockData[i].point]
        //         )
        //     }

        // const productMockData =
        //     csvToJson.fieldDelimiter(',').getJsonFromCsv('Mock_DATA_productdata.csv');
        //     for(let i=0; i<productMockData.length; i++){
        //         AppData.query(
        //             `INSERT INTO products(
        //                 name,
        //                 price,
        //                 image,
        //                 description,
        //                 date
        //             ) VALUES (?, ?, ?, ?, ?)
        //             `, [productMockData[i].name,
        //                 productMockData[i].price,
        //                 productMockData[i].image, 
        //                 productMockData[i].description,
        //                 productMockData[i].date]
        //         )
        //     }
    })
    .catch((err) => {
        console.error('Failed to initialize Data Source', err)
        AppData.destroy();
    })

module.exports = AppData 