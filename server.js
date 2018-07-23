
const fs = require('fs');
const express = require('express');   /////Modules required
const path = require('path');
const http = require('http');


const app = express();


//Used to load pages under directory to browser
app.use(express.static('public/docs'));


//Start the application
app.listen(8080, function(err)
{
    if(err) console.log(err);
    console.log('listening at http://localhost:8080/app');
});

exports = module.exports = app;
