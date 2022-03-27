const express = require('express');

const app =express();
const cors = require('cors');
const bodyParser=require('body-parser');
const port =process.port || 3000;


app.listen(port, ()=>console.log(port));
app.use(express.json());
app.use(cors());

require('./db/conn');


app.use('/login',require('./routes/login'));
app.use('/posts',require('./routes/posts'));


