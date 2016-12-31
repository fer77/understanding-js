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


