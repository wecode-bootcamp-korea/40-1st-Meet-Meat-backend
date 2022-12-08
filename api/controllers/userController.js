const { userService } = require('../services')

const signIn = async (req, res) => {
    const { email, password } = req.body
    try {
    if(!email || !password) {
        return res.status(400).json({ message : "KEY_ERROR"})
    }

    await userService.signin(
        email, password
    )
    return res.status(200).json({ message : "LOGIN_SUCCESS"})
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message : err.message })
    }
}

module.exports = { signIn }