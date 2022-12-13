const { pointService } = require('../services')
const { catchAsync } = require('../utils/error')

const getPoint = catchAsync(async (req, res) => {
	const user = req.user
	const points = await pointService.getPointsByUser(user)
	res.status(200).json(points)
})

module.exports = {
    getPoint
}