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

//var a = 3 + 4;  //* This is essentially a function call that takes two values and adds them together.
//console.log(a);  //* This will output 7. The JS engine knows this is seven, because the + sign is an operator.

// OPERATOR PRECEDENCE AND ASSOCIATIVITY

//var a = 2,
//    b = 3,
//    c = 4;

//a = b = c;

//* All three will log 4, because of associativity.  The = operator has an associativity of 'right-to-left' (see operator associativity).
//console.log(a);
//console.log(b);
//console.log(c);

//var a = 3 + 4 * 5; //* Logs 23, because associativity places * higher in precedence than +

//var a = (3 + 4) * 5; //* Logs 35, because associativity places () higher in precedence than any other operator.

//console.log(a);

// COERCION

//var a = 1 + 2;
//console.log(a); //* Logs 3 bacause 1 + 2 = 3

//var b = 'Hello ' + 'World!';
//console.log(b); //* Logs "Hello World!", it concatenates the strings together.

//var c = 1 + '2';
//console.log(c); //* Logs 12.  JS coerces the number 1 into a string '1'.  To the JS engine the nimber 1 and the string '1' are nothing alike.

// COMPARISON OPERATORS

//console.log(1 < 2 < 3); //* Returns true.
    //* Don't be fooled.Even tho this return true, what is really happening is 1 < 2 is solved first, giving it a value of true.
    //* This leaves the JS engine with (true < 3). Also remember coersion, "true" coerses to 1,
    //* so the next order of operation for the JS engine to solve is (1 < 3), which returns "true".

//* Remember operator precedence and associativity.  In the case of < it runs from left to right, so in the case of:
//console.log(3 < 2 < 1); //* Also returns true.
    //* 3 < 2 is solved first, giving it a value of false. This leaves the JS engine with (false < 1). Also remember coersion, "false" coerses to 0
    //* so the next order of operation for the JS engine to solve is (0 < 1), which returns "true".
//* Consider this:
    // Number(false);//* returns 0
    // Number(null);//* also returns 0
    // Number(undefined);//* returns NaN
    // 1 == 1;//* returns true.
    // 3 == "3";//* gets coerced and returns true.
    // false == 0;//* gets coerced and returns true.
    // var a == false;//* is indefinded.  a == 0 returns true.
    // null == false;//* returns false ??
    // null < 1 null;//* coerces and returns true, because null does not coerse to 0 for comparison (=).
    // "" == false;//* returns true.
    // "" == 0;//* returns true.
//* How can JS be prevented from coersing these values?
    //* Strict equality ===
    // 3 === 3;//* returns true.
    // "3" === "3";//* returns true.
    // "3" === 3;//* returns false.
    //* Always use === or !== unless you explecitly want to coerse the two values, then use == or !=

//var a = 0;
//var b = false;

//* Play with comparisons here:
//if (a === b) {
//        console.log('They are equal!');
//} else {
//        console.log('Nope, not equal.');<`3`>
//}

//EXISTENCE AND BOOLEANS

//* All the things that imply the lack of existence convert to false (in the console):

//Boolean(undefined); //* returns false.
//Boolean(null); //* returns false.
//Boolean(""); //* returns false.
//Boolean(0); //* returns false;

var a;

if (a) {
    //* nothing will be logged in the console, because there is no value for a.
    console.log('Something is there.');
}

//* if we give 'a' a value

a = 0;

if (a || a === 0) {
    //* this will log 'Something is there' because === goes left to right and converts to false || true and this always returns true.
    //* try: false || true  &  true || false, the console will return 'true'.
    console.log('Something is there.');
}

