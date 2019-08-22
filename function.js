/* syntax :
function <function_name>(argument){
	statement to execute
}
using function to return something
function <function_name>(argument){
	statement to execute
	return something
}
*/

let response = prompt("enter your age");

function showMessage(){
	if (response>18){
		return "Major"
	}
	else{
		return "Minor"
	}
}

showMessage();