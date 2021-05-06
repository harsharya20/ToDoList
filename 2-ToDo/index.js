const express = require('express');
const path = require('path');
const port = 8000;
const app = express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('assets'));
const db = require('./config/mongoose');
const Thing = require('./models/things');

//use express router

app.use('/',require('./routes'));



app.listen(port,function(err){
    if(err){
  console.log('error in running!!');
    }
  console.log('Server is running on port :', 8000);

});

