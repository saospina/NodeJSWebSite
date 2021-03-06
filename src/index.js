const express = require ('express');
const app = express();
const path = require('path');
const indexRoutes = require('./routes/index.js');
//Settings
app.set('port', 3000);
app.set('View engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

//Middlewares

// Routes
app.use(indexRoutes);



//Listening the server

app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
    
})

//Static files
app.use(express.static(path.join(__dirname,'public')))
