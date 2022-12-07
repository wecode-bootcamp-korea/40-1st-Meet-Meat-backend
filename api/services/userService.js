const userDao = require('../models/userDao')

const signUp = async (req, res) => {
    const { name, email, password, address } = req.body

    const pwValidation = new RegExp(
        '^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'
    )

    const emailValidation = new RegExp(
        '^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$'
    )

    if(!pwValidation.test(password) || emailValidation.test(email)) {
        const err = new Error('PASSWORD or EMAIL IS NOT VALID')
        err.statusCode = 409;
        throw err;
    }

    const hashedpassword = bcrypt.hash(password, 10);
    const createUser =
        await userDao.createUser(
            name, email, hashedpassword, address
        )

        return createUser
}

module.exports = { signUp };