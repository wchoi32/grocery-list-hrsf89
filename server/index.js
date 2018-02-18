var express = require('express');
var db = require('../database/data.js')
var parser = require('body-parser');
var app = express();

app.use(parser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/remove', function(req, res) {
  //console.log(req.body);
  db.remove(req.body);
  res.sendStatus(200);
});

app.post('/list', function(req, res) {
  //console.log(req.body);
  db.save(req.body);
  res.sendStatus(200);
});

app.get('/list', function(req, res) {
  db.retrieve((data) => {
    // console.log(JSON.stringify(data))
    res.send(200, JSON.stringify(data));
  });
});

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

