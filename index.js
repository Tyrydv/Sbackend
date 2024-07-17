require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello ')
})

app.get('/tarun',(req,res)=>{
    res.send("This page belongs to tarun")
})

app.get('/Login',(req,res)=>{
    res.send('<h1> THIS IS Heading</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})