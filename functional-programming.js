//* First class functions: Functions that behave like objects.  They can be passed as parameters, returned from other functions.  
//* This means we can use fucntional programming, we can code and think in terms of functions.
//* Take care that the lower functions do  not mutate the data we are using.

var arr1 = [1, 2, 3];
console.log(arr1);

//* Create a new arry that doubles arr1.

var arr2 = [];

for (var i = 0; i < arr1.length; i++) {
	arr2.push(arr1[i] * 2);
}

console.log(arr2);

console.log('-----------------------------------------------------------');

//* Functional programing would create the above by making use of functions.
function mapForEach(arr, fn) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr.push(
			fn(arr[i])
		)
	};

	return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
	
	return item * 2;
});

//* The function can be reused to diffrent things.
var arr3 = mapForEach(arr1, function(item) {
	
	return item > 1;
});

console.log(arr2);
console.log('-----------------------------------------------------------');
console.log(arr3);

var checkPastLimit = function(limiter, item) {
	return item > limiter;
}

//* Use the .bind() method to make a copy of checkPastLimit() function and pass the extra argument of checkPastLimit() function.
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log('-----------------------------------------------------------');
console.log(arr4);

//* Having to declare .bind() everytime is time consuming, instead create a function that can be called.
var checkLimiter = function(limiter) {

	return function(limiter, item) {

		return item > limiter;
	}.bind(this, limiter); //* presets limiter.
};

var arr5 = mapForEach(arr1, checkLimiter(2));
console.log('-----------------------------------------------------------');
console.log(arr5);











