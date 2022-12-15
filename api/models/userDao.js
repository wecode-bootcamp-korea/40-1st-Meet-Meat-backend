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
            c.email,
            c.password 
        FROM customers AS c 
            WHERE c.email = ?
            `, [email]
        )
        return user[0]
}


const getUserById = async (userId) => {

	const result = await AppData.query(
        `SELECT 
			id,
			name,
			email,
			password
		FROM customers
		WHERE id=?`, [userId]
	)

	return result[0]
}


module.exports = { 
    createUser,
    getUserByEmail,
    getUserById
}