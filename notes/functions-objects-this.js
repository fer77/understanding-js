// OBJECTS, FUNCTIONS, THIS

// console.log(this); //* At this level (global) this will return the window object.

//* Statement:
// function a() {
//        console.log(this);
// }

// a(); //*  When you're just invoking the function, this points to the global variable.

//* Expression:
// var b = function b() {
//         console.log(this);
// }

// b(); //* This will still return the window object.

//* console.log(this), a(), and b(), all point to the same location/address(global object) in the computer memory.

function a() {
    console.log(this);
    this.newVariable = 'hello'; //* Attaches the newVariable to the global object, not to the function.
}

var b = function b() {
    console.log(this);
}


console.log(this);
a();
console.log(newVariable); //* It assumes you are asking for a variable attached to the global object, so we do not need to use the dot operator.
b();

//* Object Method:
var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        self.name = 'Updated c object'; //* We can mutate the object the this object is attached to.
        console.log(self);
        var setName = function(newName) {
            self.name = newName; //* When the execution context is created for this function the this object is added to the global object.  To prevent this kind of
                //* abehavior crate a variable that references the this object withing the c object context.
        }
        setName('Reupdated c\'s name.');
        console.log(self);
    }
}

c.log(); //* When the this object is attached to a method inside of an object, the this object is attached to that object.
