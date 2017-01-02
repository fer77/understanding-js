//* ARRAYS

//var arr = new Array();

//* Array literal:
//* An array can be a collection of anything.
var arr = [
    1,
    false,
    {
        name: 'Fernando',
        address: '111 one St.'
    },
    function(someName) {
        var greeting = 'Hello ';
        console.log(greeting + someName);
    },
    'hello'
];

console.log(arr);

//* JS' dynamic typing allow for arrays to be referenced and hold functions that can then be invoked:
arr[3](arr[2].name);
