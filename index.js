


const express = require('express') // import express
const app = express() // create an express server
const port = 8000; // we will use this later

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><a href="page2">Page2</a> ')
}) // routes the '/' URL path to produce a response of 'Hello World!'

app.get('/page2', (req, res) => {
    res.send('Hello World too')
})

app.get('/page3', (req, res) => {
    res.send('Hello World 3!')
})

app.get('/users/:name/:class', (req, res) => {
    res.send(`Hello World ! ${req.params.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, 
//logging to the console to confirm that things are working