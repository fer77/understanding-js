//* AUTOMATIC SEMICOLON INSERTION
//function getPerson() {
//    return //* This will cause the JS engine to insert a ; after the 'return', because that's what the engine expects.
//    {
//        firstName: 'Fernando';
//    }
//}

//console.log(getPerson()); //* If left like this the function will return undefined.

function getPerson() {
    return {  //* Best practice is to put our { on the same line to prevent the JS engine from placing a ; where we don't want it.
        firstName: 'Fernando';
    }
}

console.log(getPerson());
