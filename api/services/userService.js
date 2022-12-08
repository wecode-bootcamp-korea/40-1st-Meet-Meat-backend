const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { userDao } = require('../models')

const signIn = async ( email, password ) => {
    
    const user = await userDao.getUserByEmail(
        email, password)
    
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        const err = new Error('INVALID_INPUT_DATA')
        err.statusCode = 409;
        throw err
    } 
        const payLoad = { userId: user.id }
        const accessToken = jwt.sign(
            payLoad, 
            process.env.JWT_SECRET, 
            { algorithm: process.env.ALGORITHM, expiresIn: process.env.JWT_EXPIRES_IN }
        )

        return accessToken;
}

module.exports = { signIn }