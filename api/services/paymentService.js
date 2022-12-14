const { paymentDao } = require('../models')


const getPaymentsByUser = async (user) => {
// console.log(user)  
//   id: 31,
//   name: 'ABCCCCC',
//   email: 'CIBA1234@email.com',
//   password: '$2b$10$HLPBr7LfbjvTAS7jcxFo9uheq6k4ioGZ8cZ1E9CkstP8RC5AVjdY.'
	const userId = user.id 
	const payments = await paymentDao.getTotalPayment(userId)
	return payments
}

module.exports = { getPaymentsByUser }