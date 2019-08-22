/* Types of logical operators:
1.or -> ||
2.and -> &&
3.Not -> !
logical operators can be used along with everything instead of boolean values alond
*/

// or -> ||
let a = 5;
if (a==3) || a(==5){
	alert("Yeah the value is either 3 or 5");
}

// and -> &&
let a = "hai";
let b = "bye";
if (a=="hai") && (b=="bye"){
	alert("yes both the values are same");
}

// not -> !
// syntax result = !value // will return the opposite of in a boolean expression
alert(!true);
// using not(!) operators twitce can be used to convert a value to boolean expression
let a = "something"
alert(!!a); // will return true
let b = null;
alert(!!b);// will return false 
