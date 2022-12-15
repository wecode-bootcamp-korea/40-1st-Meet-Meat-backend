const { paymentDao } = require('../models')


const getPaymentsByUser = async (user) => {
	const userId = user.id 
	console.log(userId)
	const userPointLeft = await paymentDao.getTotalPayment(userId)
	return {userPointLeft}
}

module.exports = { getPaymentsByUser }