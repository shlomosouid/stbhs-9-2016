const readlinesync = require('readline-sync');
var deck=[];
for (var i = 0; i < 52; i++) {
  deck[i]=0;
}
function draw() {
  var randomcard=Math.floor(Math.random()*52)
  if (deck[randomcard]==0) {
    return randomcard;

  }
}
