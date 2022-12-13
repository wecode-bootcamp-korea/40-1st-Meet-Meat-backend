const jwt = require("jsonwebtoken")

const loginAuthorization = async(req, res, next) => {
    const access_token = req.headers.authorization
    const decoded = jwt.verify(process.env.ALGORITHM, access_token)

    req.user = decoded.userId
    next();
}

module.exports = { loginAuthorization }

