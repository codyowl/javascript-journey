// we can declare variables using three keywords
// var, let, const
let myfirstvariable = 5;
alert(myfirstvariable);


 naming convention for variables:
   - apart from $ and _ none of the special characters can be used as variables
   - always use camel case for variable names
   - digits should not comes first in a variable name


//valid
let userName = 'something';
alert(userName);

// swapping
let firstName = 'firstname';
let secondName;
secondName = firstName;
alert(secondName);


// using speical characters apart from $ and _
let user-name = 'something';
alert(user-name);
// using digit as a first character for variable
let 1user = 'something';
alert(1user);   

// declaring multiple variables
let first = 1, second = 2, third = 3;

// const are constant variables which cant be changed
const userName = 'something';
userName = 'secondthing'; // this will throw an exception
alert(userName);

/* naming convention for constants:
   - use captial letter for harcoded value
   - use small letter for value which might get at execution
*/
// using captial letter for harcoded value
const RED_COLOR = "#ff0000";
// user small letter for value which will get at execution
const myconst = somefunction(someargument);

