const {getschool,postschool,putschool,deleteschool} = require('../controller/schoolController')
const auth = require('../middleware/auth')

const route = require('express').Router()

route.get('/',auth,getschool)
route.post('/',postschool)
route.put('/:id',putschool)
route.delete('/:id',deleteschool)

module.exports = route