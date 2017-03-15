var readlineSync = require('readline-sync');

var secretnumber = Math.floor(Math.random()*10)+1;
for (var win = false;!win;){
  var guess = readlineSync.question("Guess a number \n");
if (guess==secretnumber) {
  console.log( 'youwin');
  win = true;
} else {
//   if (secretnumber > guess){
//   console.log("higher \n")
// } else {
//   console.log("lower \n" )
// }
console.log((secretnumber>guess?'higher':'lower'));
}
}
