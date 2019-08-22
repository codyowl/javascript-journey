/* conditional statements and conditional operator
   - if
   - elseif
   - else
   - if (condtion) ? <true statuement> : <false statement>
*/

// if
let a = "something";
if (a == "something"){
	alert("Yes the values are same");
}

// elsif
let a = 2;
if(a==2){
	alert("value is 2");
}   
elseif(a==3){
	alert("value is 3");
}

//else
let a = "hai";
if(a=="hai"){
	alert("The value of a is hai");
}
elseif(a=="bye"){
	alert("The value of a is bye");
}
else{
	alert("I dont the value");
}

// conditional operator
let Major = (age>18) ? "major" : "minor";
// multiple conditional operator
let message = (age>18)? "Hai Major":
(age<18)? "Hai minor":
"I dont know your age ! ";
alert(message);
// using conditional operator as a replacement of if
let name = prompt("Enter your name :");
(name=="steve jobs") ? alert("Hai steve!") : alert("hai !");
