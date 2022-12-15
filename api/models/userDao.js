const AppData = require('./dataSource');

const createUser = async(name, email, hashedPassword, address) => {
    const user = 
        await AppData.query(
            `INSERT INTO 
                customers(
                    name,
                    email,
                    password,
                    address_default
                ) VALUES (?, ?, ?, ?)
                `, [name, email, hashedPassword, address]
    ) 
    return createUser
}

const getUserByEmail = async (email, password) => {
    const user =
        await AppData.query(
        `SELECT
            id,
            email,
            password 
        FROM customers 
            WHERE email = ?
            `, [email]
        )
        return user[0]
}

module.exports = { createUser, getUserByEmail };