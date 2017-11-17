

const express = require('express') // import express
const app = express() // create an express server
const port = 8000; // we will use this later
// const url = require('url')

var aiChoice =['rock','paper','scissors']

app.get('/rock', (req, res) => {
    var cpu = aiChoice[Math.floor(Math.random() * 3)]
    var result;
    if( cpu ==='scissors'){
        result = 'win'
        res.send(`{"user":"rock","ai":${cpu},"result":${result}}`)
    } else if( cpu ==='paper'){
        result = 'lose'
        res.send(`{"user":"rock","ai":${cpu},"result":${result}}`)
    }else if( cpu ==='rock'){
        result = 'tie'
        res.send(`{"user":"rock","ai":${cpu},"result":${result}}`)
    }
}) 


app.get('/paper', (req, res) => {
    var cpu = aiChoice[Math.floor(Math.random() * 3)]
    var result;
    if( cpu ==='scissors'){
        result = 'lose'
        res.send(`{"user":"paper","ai":${cpu},"result":${result}}`)
    } else if( cpu ==='paper'){
        result = 'tie'
        res.send(`{"user":"paper","ai":${cpu},"result":${result}}`)
    }else if( cpu ==='rock'){
        result = 'win'
        res.send(`{"user":"paper","ai":${cpu},"result":${result}}`)
    }
}) 


app.get('/scissors', (req, res) => {
    var cpu = aiChoice[Math.floor(Math.random() * 3)]
    var result;
    if( cpu ==='scissors'){
        result = 'tie'
        res.send(`{"user":"scissors","ai":${cpu},"result":${result}}`)
    } else if( cpu ==='paper'){
        result = 'win'
        res.send(`{"user":"scissors","ai":${cpu},"result":${result}}`)
    }else if( cpu ==='rock'){
        result = 'lose'
        res.send(`{"user":"scissors","ai":${cpu},"result":${result}}`)
    }
}) 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })