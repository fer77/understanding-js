// ASYNCRONOUS CALLBACKS

//* long running function
//function waitThreeSeconds() {
//    var ms = 3000 + new Date().getTime();
//    while (new Date() < ms){}
//    console.log('finished function');
//}

//function clickHandler() {
//    console.log('click event!');
//}

//* listen for the click event
//document.addEventListener('click', clickHandler);

//* These two functions will be put in the "stack" when it is empty the JS engine will look at the event queue and look for any event to execute from there.
//* This is to show that JS executes line by line (synchronously). If we click while the page is loading, our clickHandler function will not be executed
//* until waitThreeSeconds and console.log() have left the stack.
//waitThreeSeconds();
//console.log('finished execution');


