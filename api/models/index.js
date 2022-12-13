const AppData = require('./dataSource')
const userDao = require('./userDao')
const pointDao = require('./pointDao')

module.exports = { 
    userDao,
    pointDao,
    AppData
 };