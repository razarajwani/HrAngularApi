const express= require('express');
const mongoose=require('mongoose');
const app=express();

require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION,
    ()=>console.log('Db Connected')
);


