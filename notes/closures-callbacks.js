//* Callback function:
//* A function you give to another function, to be run when the other function is finished.
//* So the function you call ('invoke') by calling the function you gave it when it finishes.
function sayHiLater() {
	var greeting = 'Hi!';
	setTimeout(function() { //* Callback function.
		//console.log(greeting);
	}, 3000);
}

sayHiLater();

function tellMeWhenDone(callback) {

	//* Some work.
	//* Some more work.

	callback(); //* Will run the function I pass, the 'callback'.
}

//* Invoke tellMeWhenDone and pass it a callback function.
tellMeWhenDone(function() {
	var status = 'Done!';
	setTimeout(function() {
		console.log(status);
	}, 1000);
});

tellMeWhenDone(function() {
	var status = '...and done!';
	setTimeout(function() {
		console.log(status);
	}, 2000);
});

tellMeWhenDone(function() {
	var status = 'All done!!';
	setTimeout(function() {
		console.log(status);
	}, 3000);
});