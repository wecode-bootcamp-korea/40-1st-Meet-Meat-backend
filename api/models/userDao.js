const { DataSource } = require('typeorm');

const AppData = new DataSource({
    type: process.env.TYPEORM_TYPE,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE
})

AppData.initialize()
    .then(() => 
        console.log('Data Source has been initialized')
    )
    .catch((err) => {
        console.error('Failed to initialize Data Source', err)
        AppData.destroy();
    })
    
const createUser = async (req, res) => {
    try {
        const { name, email, hashedpassword, address } = req.body

        await AppData.query(
            `INSERT INTO users (
                name,
                email,
                password,
                address
            ) VALUES (?, ?, ?, ?)
            `,
            [ name, email, hashedpassword, address ]
        );
    } catch (err) {
        const error = new Error('INVALID DATA INPUT')
            error.statusCode = 500;
            throw error;
    }
}

module.exports = { createUser };