/* following are list of data types:
   - string
   - numbers
   - boolean
   - null
   - undefined
   - object
*/

/* string
 - can be specified by three types
 - single quotes, double quotes, backticks
*/
// single and double quotes
let a = "something";
let b = 'someotherthing';
//backtic
let a = "some name";
alert(`Hello ! ${a}`); // for this type of string operation back tick will be used along with ${}


// number
let b = 2

// dynamic typing
let a = "something"
a = 2;
alert(a);

// boolean
let userName = true;
let userName2 = false;
// boolean will work along with results as well
let a = 2
let b;
b = a < 4;
alert(b) // this will return true

//null 
// null are unknown values
let userEnteredName = null;
alert(userEnteredName);

// undefined
// undefined are unspecified values
let notSpecified = undefined;
alert(notSpecified);

/* finding datatypes of variables
  -  using the function typeof
  - syntax : 
     1.typeof arg 
	 2.typeof(arg)
*/

let first = 1;
alert(typeof first);	 

// object datatype
alert(typeof Math);


