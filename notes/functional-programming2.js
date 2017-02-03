var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];

for (var i = 0; i < arr1.length; i++) {
	arr2.push(arr1[i] * 2);
}

console.log(arr2);

console.log('-----------------------------------------------------------');

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

var arr3 = mapForEach(arr1, function(item) {
	
	return item > 1;
});

console.log(arr2);
console.log('-----------------------------------------------------------');
console.log(arr3);

var checkPastLimit = function(limiter, item) {
	return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log('-----------------------------------------------------------');
console.log(arr4);

var checkLimiter = function(limiter) {

	return function(limiter, item) {

		return item > limiter;
	}.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkLimiter(2));
console.log('-----------------------------------------------------------');
console.log(arr5);

//* Using underscore.js
var arr6 = _.map(arr1, function(item) { return item * 3 });
console.log('-----------------------------------------------------------');
console.log(arr6);

var arr7 = _.filter([1,2,3,4,5,6,7,8,9,0], function(item) { return item % 2 === 0 });
console.log('-----------------------------------------------------------');
console.log(arr7);







