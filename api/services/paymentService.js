const { paymentDao } = require('../models')


const getPaymentsByUser = async (user) => {
	const userPointLeft = await paymentDao.getTotalPayment(user)
	return {userPointLeft}
}

const getPrePaymentInfo = async (user)=>{
	const getPaymentInFo = await paymentDao.getPaymentInFo(user)
	return (getPaymentInFo)
}

module.exports = { 
	getPaymentsByUser,
	getPrePaymentInfo
}