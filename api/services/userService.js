const bcrypt = require('bcrypt')

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

module.exports = { signUp };