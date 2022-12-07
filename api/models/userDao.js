const AppData = require('./dataSource');
    
const createUser = async (name, email, hashedPassword, address) => {

    try {
        await AppData.query(
            `INSERT INTO customers (
                name,
                email,
                password,
                address_default
            ) VALUES (?, ?, ?, ?)
            `,
            [ name, email, hashedPassword, address ]
        );
    } catch (err) {
        const error = new Error('INVALID DATA INPUT')
            error.statusCode = 500;
            throw error;
    }
}

module.exports = { createUser };