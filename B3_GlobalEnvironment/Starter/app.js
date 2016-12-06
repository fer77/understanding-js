//b();            //functions are set up in their entirety. "Hoisting"
//console.log(a); //a will = undefined. Because all var are initially set to 'undefined' by the JS engine.

var a = "Hello World!";

function b() {
    console.log('Called b!');
}

//b();
//console.log(a); //a will = "Hello World!"
