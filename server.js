var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', function (req, res) {
    console.log('enter');
    res.send({data:'shaked'})
});    

var port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log('Our app is running on http://localhost:' + port);
});