// NAMESPACES

//var greet = 'Hello';
//var greet = 'Hola';

//console.log(greet); //* Returns 'Hola' (execution context).

//* We can prevent this collision by creating an object that will be our container:

//var english = {};
//var spanish = {};

//* Now our variables will not collide with ea. other.
//english.greet = 'Hello';
//spanish.greet = 'Hola';

//console.log(english);

//* To create a new object to hold diffrent types of greetings we can not do this:
// english.greetings.greet = 'Hello'; //* This will return undefined, because the greetings object does not yet exist inside of english.
//* First do this:
//english.greetings = {};
//* Then:
//english.greetings.greet = 'Hello';
//* Or:
//var english = {
//    greetings: {
//        greet: 'Hello'
//    }
//};
//console.log(english);


