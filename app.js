//* Global execution context contains:
//* buildFunctions() & fs
function buildFunctions() {
	//* This function's execution context contains:
	//* i = 3 & arr = [f0, f1, f2]
	//* i is 3 by the time the functions iside arr are called.
	var arr = [];

	for(var i = 0; i < 3; i++) {
		arr.push(function() { //* This function is not invoking a function, just creating one and placing it iside the arr variable.
				console.log(i); //* this console.log is not being executed.  It does not get executed until after the functions inside arr are invoked.
			})
	}

	return arr;
}

var fs = buildFunctions();

//* The functions created inside the loop are invoked here:
//* returns 3, because they were all created inside the same buildFunctions.
fs[0](); 
fs[1]();
fs[2]();

function buildFunctions2() {

	var arr = [];

	for(var i = 0; i < 3; i++) {
		arr.push(//* in order to preserve the value of i for this function we need to create a separete execution context.
				//* IIFE:
				(function(j) {
					return function() { //* This function won't have to look outside its execution context to find the value of j.
						console.log(j);
//* Everytime the loop runs it is going to execute this function, passing 0, then 1, then 2.
//* Even tho each time thid function is executed its execution contex will leave, j's value will be hanging out.
				}
			}(i))
		)
	}

	return arr;
}

var fs2 = buildFunctions2();

fs2[0](); 
fs2[1]();
fs2[2]();