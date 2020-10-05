const express = require('express');

const {mongoConnection} =require('./database/mongo');

require('dotenv').config;

const app=express();

mongoConnection();

const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});