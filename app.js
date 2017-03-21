//* Function constructor:
function Person(firstName, lastName) {

	console.log(this);
	this.firstName = firstName;
	this.lastName = lastName; //* This gets put on every single object created, which uses memory space.
	console.log('This function is invoked.');
}

//* The prototype of a function is not the prototype of the function.  It is the prototype of any object created by a function being used as a function contstructor.
Person.prototype.getFullName = function () {
	return this.firstName + ' ' + this.lastName;
}

//* When the 'new' keyword is called it creates a new empty object.  It sets the prototype of that empty object to the prototype property of the function that was called.
var bob = new Person('Bob', 'Belcher');
console.log(bob);

var linda = new Person('Linda', 'Belcher');
console.log(linda);

//* It is better to add methods on the prototype to save in memory space, because 'new' objects would only need one copy of the prototype.