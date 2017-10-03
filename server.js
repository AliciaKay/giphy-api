var express = require('express')

var app = express();
var request = require('request');
var port = 3000;

require('dotenv').config();

var apiKey = '1I4TYYhG97NXVjID27nbUPnvE9Sk0o8e&tag=&rating=G';

app.get('/giphy', function(req, res) {
    console.log('in the giphy route');
    request('https://api.giphy.com/v1/gifs/random?api_key=' + apiKey, function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.status(200).send(JSON.parse(body));
    });
});

var server = app.listen(port, function() {
    console.log('up and listening on', server.address().port);
  });

 