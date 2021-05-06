
//require the library
const mongoose = require('mongoose');
//connect to database
mongoose.connect('mongodb://localhost/Daily_planner_db');

//acquire the connection
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));


//success msg
db.once ('open',function(){
    console.log('Successfully connected to db');
});

