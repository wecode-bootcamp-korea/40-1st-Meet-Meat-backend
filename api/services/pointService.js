const { pointDao } = require('../models')


const getPointsByUser = async (userId) => {

	const points = await pointDao.getTotalPoint(userId.id)

	return {
		userId: userId.id,
		totalPoint: points
	}
}

module.exports = { getPointsByUser }