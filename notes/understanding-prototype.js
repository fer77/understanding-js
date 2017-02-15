var family = {
	lastName: 'Belcher',
	getFullName: function() {

		return this.firstName + ' ' + this.lastName;
	},
	getChildName: function(childName) {

			return childName + ' ' + this.lastName;
		}
	}

var bob = {
	firstName: 'Bob'
}
var linda = {
	firstName: 'Linda'
}
var tina = {}

//* Don't EVER! do this in a real aplication.
bob.__proto__ = family; //* If we try to access a property or method on bob that doesn't exist on bob, the JS engine will go to person and find it.
linda.__proto__ = family;
tina.__proto__ = family;
//* Now we can access a method that bob doesn't have and make use of it:
console.log(bob.getFullName()); //* The JS engine will see that the method is not in bob and will go to bob's prototype and look for it there.  It will find it and set 'this' to the object that originated the call.
console.log(linda.getFullName());
console.log(tina.getChildName('Tina'));