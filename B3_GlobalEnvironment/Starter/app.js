// HOISTING //

//b();            //functions are set up in their entirety. "Hoisting"
//console.log(a); //a will = undefined. Because all var are initially set to 'undefined' by the JS engine.

//var a = "Hello World!";

//function b() {
//    console.log('Called b!');
//}

//b();
//console.log(a); //a will = "Hello World!"

// UNDEFINED //

//var a; //This will throw an undefined.

//var a = "I am defined!";

//a = undefined; //Never do this.

//console.log(a); //Without var a this would throw a "...referenceError: a is not defined"

//if (a === undefined) {
//    console.log('a is undefined! :-(');
//} else {
//    console.log('a has been defined! :-)');
//}

// EXECUTION

//function b() {
//    console.log('Called b!');
//}

//b(); // Outputs 'Called b!'

//console.log(a); // Outputs Undefined, because of the execution context.

//var a = "Hello World!";

//console.log(a); // Outputs "Hello World!"

// VARIABLE ENVIRONMENT
function b() {
    var myVar;
   console.log(myVar); // Undefined, because myVar is inside b's execution context.
}

function a() {
    var myVar = 2;
   console.log(myVar); // 2, because myVar is inside a's execution context.
    b();
}
 var myVar = 1;
console.log(myVar); // 1 because myVar is in the global execution context.
 a();    // What is the value of var?
        //
