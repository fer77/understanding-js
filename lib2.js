// var libraryName = 'lib2';
//* To prevent collisions, we can check that the libraryName is not being used:
window.libraryName = window.libraryName || 'lib 2'; //* if libraryName has been declared return the value,
                                                //* otherwise return the default name 'lib2'.
