//STATEMENTS AND EXPRESSIONS

//* Expressions:
// a = 3; returns 3.
// 1 + 2; returns 3.
//* Both expressions return a value, that can be a string, an object, whatever:
// a = { greeting: 'hi' }; returns Object {greeting: "hi"}

//* Statement:
//if (a === 3) {
    //* A statement just does work, it doesn't return a value. The expression inside the statement results in a value.
//}

//* Function statement:
//greet(); //* This gets hoisted, it returns 'hi'.
// function greet() {
//         console.log('hi');
// }
//* It doesn't return a value until it is executed.

//* Function expression:
//* function expressions are not hoisted.
//anonymousGreet(); //* This is not hoisted, it will return 'undefined'.
//var anonymousGreet = function () {
//        console.log('hi');
//}

//anonymousGreet();

//* we can pass anything to this function:
//function log(a) {
//    console.log(a);
//    a();
//}
//* a string:
//log("hello");

//* a number:
//log(7);
//* an object:
//log({
//    string: "hello",
//    number: 7
//})

//* a function (anonymous function in this case), which is also just an object (function object).
//log(function() {
//    console.log('Hello from inside anonymous'); //* remember this is a function expression.
//});
//* Functional programming, available because of first class functions. JS treats functions as objects.


