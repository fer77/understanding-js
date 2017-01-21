//* Factory:
//* A function that returns or makes other things for us.
function makeGreeting(language) {
//* The language variable will be 'trapped' within this closure.
	return function(firstname, lastname) {
		//* When this function is executed here, it will look for the language variable up the scope and have access to it
		//* even after makeGreeting's executin context is done.
		if (language === 'en') {
			console.log('Hello ' + firstname + ' ' + lastname);
		}
		if (language === 'es') {
			console.log('Hola ' + firstname + ' ' + lastname);
		}
	}
}

//* These are two difrent execution context, because they were created during two diffrent execution contexts.
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Titan', 'Fernandez');
greetSpanish('Titan', 'Fernandez');

//* Everytime we call a function it gets its own execution context and any functions created iside of it 
//* will point to that execution context. JS knows which one to point to properly.