/**
 * Created by danielscott on 3/19/17.
 */
let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let port = process.env.PORT || 5500;

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client/assets')));
app.use(express.static(path.join(__dirname, 'client/assets/partials')));
app.use(express.static(path.join(__dirname, 'client/assets/css')));
app.use(express.static(path.join(__dirname, 'bower_components/angular')));
app.use(express.static(path.join(__dirname, 'bower_components/angular-route')));
require('./server/config/mongoose.js');
require('./server/config/routes.js');

app.listen(port, function () {
    console.log(`Server Online Reviewing Primary Directives on Port ${ port }`)
});