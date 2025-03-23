const express = require('express')
const app = express ()
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({path:path.join(__dirname,'config', 'config.env')})


app.listen(process.env.PORT, ()=>{
    console.log(`Server is Running on ${process.env.PORT} for ${process.env.NODE_ENV}`)
})