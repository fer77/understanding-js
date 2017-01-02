//* NO FUNCTION OVERLOAD IN JS
function greet(firstName, lastName, language) {
    if (language === 'English') {
        console.log('Hello ' + firstName + ' ' + lastName);
    }
    if (language === 'Spanish') {
        console.log('Hola ' + firstName + ' ' + lastName);
    }
}

function greetEnglish(firstName, lastName) {
    greet(firstName, lastName, 'English');
}

function greetSpanish(firstName, lastName) {
    greet(firstName, lastName, 'Spanish');
}

greetEnglish('Fernando', 'Fernandez');
greetSpanish('Titan', 'Fernandez');
