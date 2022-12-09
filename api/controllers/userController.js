const { userService } = require('../services')
const { catchAsync } = require('../utils/error')

const signUp = async ( req, res ) => {
    try {
        const { name, email, password, address } = req.body

        if( !name || !email || !password || !address) {
            return res.status(400).json({ message : 'KEY_ERROR' })
        }

        await userService.signUp (
            name, email, password, address
        )
        return res.status(201).json({ message : "SIGNUP_SUCCESS"})
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message : err.message })
    }
};

const signIn = catchAsync(async(req, res) => {
    const { email, password } = req.body

    const accessToken = await userService.signIn(
        email, password
    )
    res.status(201).json({ access_token : accessToken })
})

module.exports = { signUp, signIn }