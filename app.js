const express = require('express');
const app = express();
const mongoose = require('mongoose');
const body_parser = require('body-parser');
const cors = require('cors');
//To hide connection info 
require('dotenv/config');

//Middlewares 
// app.use('/posts', () =>{
//     console.log("This is the middleware running");
// });
app.use(cors());
app.use(body_parser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
// app.get / post / delete etc
app.get('/',(req, res) => {
    res.send("We are on home");
});



//Connet to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("Connected to DB");
});


//How to we start listening to the server
app.listen(3000);

