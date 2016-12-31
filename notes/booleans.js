//EXISTENCE AND BOOLEANS

//* All the things that imply the lack of existence convert to false (in the console):

//Boolean(undefined); //* returns false.
//Boolean(null); //* returns false.
//Boolean(""); //* returns false.
//Boolean(0); //* returns false;

//var a;

//if (a) {
    //* nothing will be logged in the console, because there is no value for a.
//    console.log('Something is there.');
//}

//* if we give 'a' a value

//a = 0;

//if (a || a === 0) {
    //* this will log 'Something is there' because === goes left to right and converts to false || true and this always returns true.
    //* try: false || true  &  true || false, the console will return 'true'.
//    console.log('Something is there.');
//}


