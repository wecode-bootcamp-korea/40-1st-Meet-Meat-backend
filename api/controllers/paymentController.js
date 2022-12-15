const { paymentService } = require('../services')
const { catchAsync } = require('../utils/error')

const getPaidInformation = catchAsync(async (req, res) => {
	const user = req.user
	const payments = await paymentService.getPaymentsByUser(user)
	res.status(200).json(payments)
})

const getPrePaymentInfo =  catchAsync(async (req, res)=> {
	const user = req.user
	const payinfo = await paymentService.getPrePaymentInfo(user)
	const data =[]
	data.push(payinfo[0][0], payinfo[1][0], payinfo[1][1])
	console.log(data)
	res.status(200).json(data)
})

module.exports = {
    getPaidInformation,
	getPrePaymentInfo
}