var userName = prompt('Welcome to my page.  If you have money introduce yourself');
alert('Nice to meet you ' + userName + '. I am going to ask you some questions about me.  No pressure really?');
console.log('The user name is ' + userName);

var response1 = prompt('Am I a successful Bridge Officer?').toLowerCase();
var answer1 = 'yes';

// if(The useris correct) {
//   tell them they got it right
// }
// else {
//   tell them they got it wrong.
// }
if (response1 === answer1 || response1 === answer1[0]) {
  alert('You are correct ' + userName + ', I\'ve been at it for a while.');

}
