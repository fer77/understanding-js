//* Function constructor:
function Person(firstName, lastName) {

	console.log(this); //* returns the Person object.
	this.firstName = firstName;
	this.lastName = lastName;
	console.log('This function is invoked.'); //* shows we are not calling Person when bob is invoked.
}

var bob = new Person('Bob', 'Belcher');
console.log(bob); //* the 'new' operator attaches the 'this.' object to bob.

var linda = new Person('Linda', 'Belcher');
console.log(linda); //* the 'new' operator attaches the 'this.' object to linda.