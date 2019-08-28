// object properties
let myProperty = {
	author : "Dan Brown",
	bookname : "origin"
}

// accessing object property value by dot notation
alert(myProperty.author) // will return dan brown.
alert(myProperty.bookname) // will return origin

// delete a property
delete myProperty.author

// multiword property
let myProperty2 = {
	"author name" : "Dan brown",
	"Book name" : "origin"
}
// note : here we have used to represent key in double quotes since its a multiple word

// computed property
let name = prompt("Enter a programmer's name")
let myComputedProperty = {
	[name] : "software engineer",
}
// here what ever got as an input from prompt will be stored to name and that value will be assigned as key to my computed property
alert(myComputedProperty.mark)
