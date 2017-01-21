//* Closures are a feature of the JS programming language.

function greet(whattosay) {

	return function(name) {
		console.log(whattosay + ' ' + name);
	}
}

//* Greet invokes a function that returns a function.
//greet('Hi')('Fernando')
//* There's something weird going on here to see it do:
var sayHi = greet('Hello'); //*The whattosay variable is created here. The greet function is called,
							//* then the function is done it leaves the execution stack.
sayHi('Titan'); //* When it gets invoked here it still has the proper value.