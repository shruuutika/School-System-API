const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const UserRoute = require('./route/userRoute')
const SchoolRoute = require('./route/schoolRoute')
const Cors = require('cors')

const app = express()

// middleware 
app.use(express.json())
app.use(cors())

// default route
app.get('/',(req,res)=>{
    res.send("This is home page")
})

// main route
app.use('/api/user',UserRoute)
app.use('/api/school',SchoolRoute)

app.listen(process.env.PORT,()=>{
    console.log("Listening to port 5000");
})

async function main() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log("error",error.message);
    }
}
main()