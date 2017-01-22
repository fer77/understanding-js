var person = {
	firstname: 'Nova',
	lastname: 'Fernandez',
	getFullName: function() {

		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
}

var logName = function(lang1, lang2) {

	console.log('logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('----------------------------');
}

//logName(); //* Will error because the this keyword point to the global object and not the person object.

//* bind()
//* returns a new function, it makes a copy and sets up this new function object so that when it runs
//* JS sees that it was created by the bind() method and points to the object that was passed:
var logPersonName = logName.bind(person); //* whatever object we want to be the this variable when the function runs.

logPersonName('en');

//* call()
//* the first thing passed to call() is where the this keyword should point to.
//* when the function is called (invoked), it then executes the function.
logName.call(person, 'en', 'es');

//* apply()
//* same as call() with only one difference, it only takes an array of parameters rather than just
//* arguments:
logName.apply(person, ['fr', 'ch']);

//* All three methods can also be used like this:
(function(lang1, lang2) {
	console.log('logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('----------------------------');
}).apply(person, ['jp', 'gr']);

//* FUNCTION BORROWING:
var person2 = {
	firstname: 'Cora',
	lastname: 'Fernandez'
}

//* person2 object borrowed the getFullName method from person.  We can use this as long as we have
//* similar property names.
console.log(person.getFullName.apply(person2));

//* FUNCTION CURRYING
//* Creating a copy of a function, but with preset parameters.
//* Applies speciffically the bind() method.
//* Passing parameters to the new method when it is made sets permanent values for the parameters.
function multiply(a, b) {
	return a * b;
}

//* This creates a copy (new function) of multiply:
//var multiplyByTwo = multiply.bind(multiply, 2); //* Because we are passing a parameter, 
												//* the bind() method will set the first parameter (a) of this function to be always 2.
												//* if a third parameter is passed, it will be set to be the permanent value of b.
var multiplyByTwo = multiply.bind(multiply, 2, 2);

var multiplyByThree = multiply.bind(multiply, 3);
//* If we invoke the function and pass a parameter:
//* multiplyByTwo(4); will set the second parameter (b) to four.
console.log(multiplyByTwo(4)); //* This will be treated as an extra parameter, if a second parameter was passed earlier.

console.log(multiplyByThree(4));
