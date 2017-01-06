//* IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFEs)
//* Function statement:
function greet(name) {

        console.log('Hello ' + name);

}
greet('Titan');

//* Function expression:
var greetFunc = function(name) {

    console.log('Hello ' + name);

};
greetFunc('Nova');

//* Immediately Invoked Function Expression (IIFE):
var greeting = function(name) {

    return 'Hello ' + name;

}('Cora'); //* Same as doing this:
                // console.log(greeting); //* Returns the whole function.
                // console.log(greeting('Cora'));
console.log(greeting); //* In this case greeting holds the string and not the function.  If we invoke greeting we get an error:
                        //console.log(greeting());

//* This won't throw an error:
    // 3;
    // "I am a string";
//* they are just put in memory.
//* But this will:
//    function(name) {

//    return 'Hello ' + name;

//}

//* Function statement as an expression:
//* () is a grouping operator, it only groups expressions, like (3 + 4) - 6
(function(name) {

    return 'Hello ' + name;

});


var firstName = 'Fernando';
(function(name) {

    var greeting = 'Hello from inside IIFE'

    console.log(greeting + ' ' + name);

}(firstName));

//* This function can also be invoked like this:
(function(name) {

    var greeting = 'Hello from inside IIFE'

    console.log(greeting + ' ' + name);

})(firstName);


