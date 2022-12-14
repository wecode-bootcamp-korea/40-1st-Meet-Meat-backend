const { paymentDao } = require('../models')


const getPaymentsByUser = async (userId) => {

	const payments = await paymentDao.getTotalPayment(userId.id)

	return {
		userId: userId.id,
		totalPayment: payments
	}
}

module.exports = { getPaymentsByUser }