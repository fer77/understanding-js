(function(global, name) {

    var greeting = 'Hello'; //* declaring variables inside an IIFE prevents putting something accidently into the global context.
    //* To conflict with the global context or to add something to the global context, we can pass the window object to this IIFE.
    global.greeting = 'hello'; //* This overwrittes 'Hola' intentionally.  Making our code safe.

    console.log(greeting);

}(window, 'Fernando'));

console.log(greeting);

//* Both greeting variables exist in difrent execution context.