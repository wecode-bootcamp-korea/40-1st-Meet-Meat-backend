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

module.exports = { createUser };