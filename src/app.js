const express = require('express')
const cors = require('cors')

const moviesRouter = require('./movies/movies.router')

const app = express()

app.get('/', (req,res) =>{
    res.status.json({message:"server ok"})
})

app.use(express.json())
app.use(cors())
app.use('/',moviesRouter)

app.listen(3000 ,() =>{
    console.log("server in funtion");
})

 module.exports = app
