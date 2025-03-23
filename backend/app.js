const express = require('express')
const app = express ()
const dotenv = require('dotenv')
const path = require('path')
const connectDatabase = require('./config/connectDatabase')

dotenv.config({path:path.join(__dirname,'config', 'config.env')})

const books = require('./route/bookRoute')

connectDatabase();

app.use(express.json())
app.use('/api/', books)



app.listen(process.env.PORT, ()=>{
    console.log(`Server is Running on ${process.env.PORT} for ${process.env.NODE_ENV}`)
})