const AppData = require('./dataSource');

const getUserByEmail = async (email, password) => {
    const user =
        await AppData.query(
        `SELECT 
            c.email,
            c.password 
        FROM customers c 
            WHERE c.email = ?
            `, [email]
        )
        return user[0]
}

module.exports = { getUserByEmail };