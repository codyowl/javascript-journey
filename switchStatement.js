/* syntax for switch statement
switch (statement){
	case result:
		<do something>
		break;
	default:
		<default statement>
		break;	
*/

let a = prompt("Enter a number");

switch(a){
	case 1:
		alert("Tne entered number is 1");
		break;
	case 2:
		alert("The entered number is 2");
		break;
	case 3:
		alert("The entered number is 3");
		break;
	default:
		alert("I dont know the number");
		break;			
}		