const express = require('express')
const moviesRouter = require('../src/movies/movies.router')
const db = require('../src/utils/database')
const cors = require('cors')
const app = express()
require('dotenv').config()
app.use(cors())
app.get('/', (req,res) =>{
    res.status.json({message:"server ok"})
})
app.use(express.json())
app.use('/',moviesRouter)

db.authenticate()
   .then(() =>console.log('Database Authenticated!'))
   .catch(err =>console.log(err))
db.sync()
.then(() =>console.log('Database Synced!'))
.catch(err =>console.log(err))

app.listen(3000 ,() =>{
    console.log("server in funtion");
})

 module.exports = app
