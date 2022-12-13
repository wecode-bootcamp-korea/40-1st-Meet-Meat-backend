const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const { userDao } = require('../models')

const signUp = async (name, email, password, address) => {

    const pwValidation = new RegExp(
        '^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'
    )

    const emailValidation = new RegExp(
        '^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$'
    )

    if(!pwValidation.test(password) || !emailValidation.test(email)) {
        const err = new Error('INVALID_INPUT_DATA')
        err.statusCode = 409;
        throw err;
    }

    const SALT_ROUNDS = 10;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const createUser =
        await userDao.createUser(
            name, email, hashedPassword, address
        )

        return createUser
}

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


const getUserById = async (userId) => {
    return await userDao.getUserById(userId)

}

module.exports = { 
    signUp, 
    signIn,
    getUserById
}