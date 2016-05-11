var userName = prompt('Welcome to my page.  If you ready to play introduce yourself.');
alert('Nice to meet you ' + userName + '. I am going to ask you some questions about me.  No pressure really?');
console.log('The user name is ' + userName);

var response1 = prompt('Am I a successful Bridge Officer?').toLowerCase();
var answer1 = 'yes';
var wrong1 = 'no'; //Third var needed to cover random response entries, look into switch for next time.

if (response1 === answer1 || response1 === answer1[0]) {
  alert('You are correct ' + userName + ', I\'ve been at it for a while.');

}
else if (response1 === wrong1 || response1 === wrong1[0]) {
  alert('You are so wrong! ' + userName + ', didn\'t you do your homework?');
}

else{
  alert(userName + ', that was not the answer I was expecting...');
}

console.log('The response from ' + userName + ' was ' + response1);

var response2 = prompt(userName + ' Is this my first carreer shift?').toLowerCase();//if answers are in lower case remember to NOT use .toUpperCase
var answer2 = 'no';
var wrong2 = 'yes';

if (response2 === answer2 || response2 === answer2[0]) {
  alert('Very good,' + userName + ' you\'re smarter than you look!');
}

else if (response2 === wrong2 || response2 === wrong2[0]){
  alert(userName + ', I\'m beginning to doubt your reading abilities.');
}

else {
  alert(userName + ', that is not an appropriate answer!');
}

console.log(userName + '\'s response was ' + response2);

var response3 = prompt(userName + ' Do you care about any of these questions?').toLowerCase();
var answer3 = 'no';
var wrong3 = 'yes';

if(response3 === answer3 || response3 === answer3[0]){
  alert('That\'s messed up ' + userName + '!');
}

else if (response3 === wrong3 || response3 === wrong3[0]){
  alert('I\'m sorry ' + userName + ', I misjudged you. Let\'s try again!');
}
else {
  alert('Big waste of my time, but I\'m still getting paid!');
  console.log(userName + ' responded ' + response3 + '.');
}

var response4 = prompt(userName + ', Are you getting bored yet?').toLowerCase();
var answer4 = 'yes';
var wrong4 = 'no';

if(response4 === answer4 || response4 === answer4[0]){
  alert('Well, it\'s almost over ' + userName + '!');
}

else if (response4 === wrong4 || response4 === wrong4[0]){
  alert('That\'s cool ' + userName + ', but it\'s getting late!');
}
else {
  alert('C\'mon ' + userName + ', at least answer the questions!');
  console.log(userName + ' answered ' + response4);
}

var response5 = prompt(userName + ' Are you ready to end this game?').toLowerCase();
var answer5 = 'yes';

if (response5 === answer5 || response5 === answer5[0]) {
  alert('Good, ' + userName + ', let\'s go get a beer!');
}

else {    /*last statement normal if else*/
  alert('Too bad, I\'m going to get a beer!');

  console.log('I don\'t really care what he answers at this point...Miller time!');

};
