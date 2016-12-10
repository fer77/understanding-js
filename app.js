// HOISTING //

//b();            //* functions are set up in their entirety. "Hoisting"
//console.log(a); //* a will = undefined. Because all var are initially set to 'undefined' by the JS engine.

//var a = "Hello World!";

//function b() {
//    console.log('Called b!');
//}

//b();
//console.log(a); //* a will = "Hello World!"

// UNDEFINED //

//var a; //* This will throw an undefined.

//var a = "I am defined!";

//* a = undefined; **Never do this.**

//console.log(a); //* Without var a this would throw a "...referenceError: a is not defined"

//if (a === undefined) {
//    console.log('a is undefined! :-(');
//} else {
//    console.log('a has been defined! :-)');
//}

// EXECUTION

//function b() {
//    console.log('Called b!');
//}

//b(); //* Outputs 'Called b!'

//console.log(a); //* Outputs Undefined, because of the execution context.

//var a = "Hello World!";

//console.log(a); //* Outputs "Hello World!"

// VARIABLE ENVIRONMENT

//function b() {
//    var myVar;
//   console.log(myVar); //* Undefined, because myVar is inside b's execution context.
//}

//function a() {
//    var myVar = 2;
//   console.log(myVar); //* 2, because myVar is inside a's execution context.
//    b();
//}
//var myVar = 1;
//console.log(myVar); //* 1 because myVar is in the global execution context.
//a();    //* What is the value of var?

// SCOPE CHAIN

//function b() {
//   console.log(myVar); //* What value will be logged?. Without a value declared the function will reference its outer environment.
//}

//function a() {

//    function b() {

//        console.log(myVar); //* b's outer lexical environment is now a. This will log 2.
//    }

    //var myVar = 2; //* a will reference its outer lexical environment.
//    b();
//}
//var myVar = 1;
//a();

// ASYNCRONOUS CALLBACKS

//* long running function
//function waitThreeSeconds() {
//    var ms = 3000 + new Date().getTime();
//    while (new Date() < ms){}
//    console.log('finished function');
//}

//function clickHandler() {
//    console.log('click event!');
//}

//* listen for the click event
//document.addEventListener('click', clickHandler);

//* These two functions will be put in the "stack" when it is empty the JS engine will look at the event queue and look for any event to execute from there.
//* This is to show that JS executes line by line (synchronously). If we click while the page is loading, our clickHandler function will not be executed
//* until waitThreeSeconds and console.log() have left the stack.
//waitThreeSeconds();
//console.log('finished execution');

// PRIMITIVE TYPES

//* Dynamic typing
// var isNew = 'Hello';  //* Will give us no error.

//* Static typing
// boll isNew = 'Hello';  //* Will trow an error, becuase the value is not true or false.

//* There are six primitive types in JS:
//* 1. Undefined
//* 2. Null
//* 3. Boolean
//* 4. Number
//* 5. String
//* 6. Symbol (ES6)

// OPERATORS

// In JS operators are functions:
// +
// -
// *
// /
// >, >=, <, <=, =

//* Prefix notation: + 3, 4
//* Postfix notation: 3, 4+
//* Infix notation: 3 + 4

var a = 3 + 4;  //* This is essentially a function call that takes two values and adds them together.
console.log(a);  //* This will output 7. The JS engine knows this is seven, because the + sign is an operator.
