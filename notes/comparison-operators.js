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
//        console.log('Nope, not equal.');
//}


