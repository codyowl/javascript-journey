/* three types of interactions 
  1.alert
  2.prompt
  3.confirm
*/

/* alert:
Will show some text as a popup box on the browser
*/
alert("Say something !");
let a = "say something too";
alert(a);

/* prompt:
will show a popup with a text field alnog with ok and cancel to get input from the user
the prompt can have two arguments .
prompt(question, default);
default argument is optional which will have default value for the text field
*/
prompt("What is your name ?", "noname");

/* confirm:
confirm will show a popup with ok and cancel option if ok pressed then it will return true else false.
*/
let confirmation = confirm("Are you ok with the agreement ?");//will return true if ok pressed else false.

