

const express = require('express') // import express
const app = express() // create an express server
const port = 8000; // we will use this later
// const url = require('url')

var aiChoice =['rock','paper','scissors']

app.get('/add/:num/:num2', (req, res) => {
    let num = req.params.num
    let num2  = req.params.num2
    let ans = parseInt(num) + parseInt(num2)
    let final = {
        num : req.params.num,
        num2 : req.params.num2,
        result: ans,
    }
    res.send(final)
})

app.get('/sub/:num/:num2', (req, res) => {
    let num = req.params.num
    let num2  = req.params.num2
    let ans = parseInt(num) - parseInt(num2)
    let final = {
        num : req.params.num,
        num2 : req.params.num2,
        result: ans,
    }
    res.send(final)
})

app.get('/mul/:num/:num2', (req, res) => {
    let num = req.params.num
    let num2  = req.params.num2
    let ans = parseInt(num) * parseInt(num2)
    let final = {
        num : req.params.num,
        num2 : req.params.num2,
        result: ans,
    }
    res.send(final)
})
app.get('/div/:num/:num2', (req, res) => {
    let num = req.params.num
    let num2  = req.params.num2
    let ans = parseInt(num) / parseInt(num2)
    let final = {
        num : req.params.num,
        num2 : req.params.num2,
        result: ans,
    }
    res.send(final)
})






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })