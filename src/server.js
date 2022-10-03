const express = require('express');
const app = express();
const env = require('dotenv');
env.config();
let port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.status(200).send('<h1>It works123</h1>');
});

app.listen(port,()=>{
    console.log('listening on port',port)
});