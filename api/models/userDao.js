const AppData = require('./dataSource');

const getUserByEmail = async (email, password) => {
    try {
        await AppData.query(
        `SELECT * FROM 
            customers c 
            WHERE c.email = ?
            `, [email]
        ) 
    } catch (err) {
        const error = new Error('INVALID_DATA_INPUT')
        error.statusCode= 500;
        throw error        
    }
}

module.exports = { getUserByEmail };