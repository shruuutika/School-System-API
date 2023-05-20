const mongoose = require('mongoose')

const schoolSchema = mongoose.Schema({
    result:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model('school',schoolSchema)