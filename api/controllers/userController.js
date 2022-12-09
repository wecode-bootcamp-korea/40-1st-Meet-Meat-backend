const { userService } = require('../services')
const { catchAsync } = require('../utils/error')

const signIn = catchAsync(async(req, res) => {
    const { email, password } = req.body

    const accessToken = await userService.signIn(
        email, password
    )
    res.status(201).json({ access_token : accessToken })
})

module.exports = { signIn }