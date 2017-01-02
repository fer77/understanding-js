function greet(firstName, lastName, initials) {
    //* Default values can be set like this:
    initials = initials || 'XX';

    //* When no parameters are passed we can have the function do something like this:
    if (arguments.length === 0) {
        console.log('Missing parameters');
        console.log('---------');
        return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(initials);
    //* JS' execution context sets up a special keyword that holds all the values passed as arguments in an array-like:
    console.log(arguments);
    //* We can access the array-like the same as any other array:
    console.log('arg 0: ' + arguments[0] + ',',
                'arg 1: ' + arguments[1] + ',',
                'arg 2: ' + arguments[2]);
    console.log('---------');
}

greet();
//* Invoking greet without any arguments returns 'undefined', because hoisting gives arguments the value of 'undefined' during the creation phase.

greet('Fernando');
greet('Fernando', 'Fernandez');
greet('Fernando', 'Fernandez', 'FF');

