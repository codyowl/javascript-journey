/* three basic types of conversion
   - number => Number(value);
   - string => String(value);
   - boolean => Boolean(value);
*/

// number conversion
let a = "1";
alert(typeof a);
let b = Number(a);
alert(typeof b)

// string conversion
let a = true;   
alert (typeof a); // will return boolean
let b = String(a);
alert(typeof b); // will return string

// Boolean conversion
let a = "";
let b = Boolean(a);
alert(typeof b) // will return false boolean type
