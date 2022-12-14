const { paymentService } = require('../services')
const { catchAsync } = require('../utils/error')

const getPayment = catchAsync(async (req, res) => {
	const user = req.user
	const payments = await paymentService.getPaymentsByUser(user)
	res.status(200).json(payments)
})

module.exports = {
    getPayment
}