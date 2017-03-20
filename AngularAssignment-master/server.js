/**
 * Created by daniel scott on 3/17/17.
 */
let express = require('express');
let path = require('path');
let port = process.env.PORT || 5000;
let app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.listen(port, function () {
    console.log(`Running on port ${ port }`)
});