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

//* Don't do this EVER!!!!
bob.__proto__ = family;

for (var prop in bob) {
	if (bob.hasOwnProperty(prop)) {

		console.log(prop + ': ' + bob[prop]);
	}
}

var linda = {
	address: 'Ocean Avenue',
	getFormalFullName: function() {
		return this.lastName + ', ' + this.firstName;
	}
}

var teddy = {
	getFirstName: function() {
		return firstName;
	}
}

_.extend(bob, linda, teddy); //* This combines these objects. It takes all the properties and methods and adds them directly to bob.
console.log(bob);