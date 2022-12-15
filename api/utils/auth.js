const jwt = require("jsonwebtoken")

const loginAuthorization = async(req, res, next) => {
    const access_token = req.headers.authorization
    const decoded = jwt.verify(access_token, process.env.JWT_SECRET)

    req.user = decoded.userId
    next();
}

module.exports = { loginAuthorization }

