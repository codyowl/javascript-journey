/* like anyother programming language the operators will be same 
except it does have few exception in particular use cases
*/

// Numberic conversion using +
// adding + in front of a string will treat that as a number
let a = "2"
alert(typeof a);
let b = +a // will be converted to number
alert(typeof b); // will return number

let colorRange = "2";
let secondColorRange = "3";
alert(colorRange + secondColorRange); // this will concatenate
alert(+colorRange + +secondColorRange);// this will sum because the values are converted to numbers

// operator percedence
// this is same like in all the other programming language
// but we can change the precedence using ()

// Assignment
//multiple assignment
let a = b = c = 5;
alert(a);
alert(b);
alert(c); // will all be 5

// increment and decrement 
let a = 1;
a += 1; // will add 1 to a
a++; // increase a by 1
// here ++ operator will return the new value
let a = 1
a++;
alert(a); // will return old value
++a;
alert(a); // will return new value


// comma operator
// will return the last value after a computation
let a = (1+2, 3+4);
alert(a); // this will print 7 which is the last computed value
// reason for this is to perform complex operations
/* 
example :
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
} */

/* comparision
   string comparision
   strict equality
*/
let a = "A";
let b = "Z";
alert(b > a); // this will reuturn true and thats how string comparions works

// strict equality : this will check along with the data type
let a = "1";
let b = 1;
alert(a==b);// will return true cause the values are same  
alert(a===b);//will return false cause the datatypes are different