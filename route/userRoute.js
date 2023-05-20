const {register,login,putuser,deleteuser} = require('../controller/userController')

const route = require('express').Router()

route.post('/',register)
route.post('/login',login)
route.put('/"id',putuser)
route.delete('/:id',deleteuser)

module.exports = route