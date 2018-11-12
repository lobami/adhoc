const express = require('express');
const app = express();
const path = require('path');
//const indexRoute = require('./routes/');
//setings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares

//routes
app.use(require('./routes/'));

//static files
app.use(express.static(path.join(__dirname, 'public')));
//listening
app.listen(app.get('port'), () => {
    console.log("Servidor en el puerto", app.get('port'));
});