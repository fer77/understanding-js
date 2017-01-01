// BY VALUE BY REFERENCE
//* By value (primitives)
var a = 3;
var b;
b = a; //* a = 3 and b = 3. By value.
    console.log(a);
    console.log(b);
//* Because 3 is a primitive type, the = operator creates a new spot in memory for b, copies the value for a and sets it to b in a different spot in memory.
    //* So b = 3 and b = 3, but they will be copies of each other, sitting in different memory spots.
    //* We can change the value of a:
a = 2; //* and it will not affect the value of b.

    console.log(a);
    console.log(b);

//* By reference (all objects (including functions))
var c = { greeting: 'hi' };
var d;

d = c; //* Because c is pointing to an object that already exists, the = operator simply points d to the same object, not creating a new spot in memory for d.
        //* So d and c will point to the same spot in memory, because they are not copies of each other.
c.greeting = 'hello'; //* value is mutated for d and c.

console.log(c);
console.log(d); //* Changes made to one will change the other's.

//* By reference (even as parameters)
    function changeGreeting(obj) {
        obj.greeting = 'Hola'; //* Value will be mutated by reference.
    }

changeGreeting(d);
console.log(c);
console.log(d); //* Changes made to one will change the other's.

//* Equals operator (=) sets up new memory space (new address):
c = { greeting: 'howdy' };
console.log(c); //* will return 'howdy'
console.log(d); //* Will return 'hola'
    //* This is a special case, where the equal operator sees that these do not have a preexisting location in memory.
    //* c = { greeting: 'howdy' }; This object literal syntax is a brand new object that didn't exist in memory it(=) had to
    //* set up a spot in memory for the new object to live. So c now points to a new location than d.

