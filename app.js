// single line comment
/**
 * multi line comment
 * see two lines
 */

/*  
    other way to do
    multi-line 
    comments
*/

/**
 * (deceleration)  (name of the var)  (assignment)  (value)
 *     var                 x               =           1
 */
// var x = 1 + 5638;
// assign variables to the solution of a expression
// var y = x + 1;

// we can assign variables to whatever the value of another variable is
// var z = 2;
// var q = z;
// console.log(z);

// console.log(x, y);

// var hello = `"hello world" 'hello world'`;
// console.log(hello);

// var name = 'Harcourt';
// console.log(`hello 'my' name is "${name}"`);

// data type
// numbers 1-infinity can also be decimals 1.8383838383 can be negative -1939393
// strings = text 'hello world' "hello world" `hello world` `` <== these things are called template literals
// boolean true false

// string numbers vs NUMBER numbers
// var one = 1;
// var uno = '1';
// console.log(`the value of the variable one is : `, one);
// console.log(`the value of the variable uno is : `, uno);

/**
 * well get to this stuff later, but they are data types
 */
// undefined OR null
// object : var banana = { key : 'value', myOtherKey : 3 }
// arrays : var orange = [ 1, 'string', banana ]

// array is just a list that starts at 0
// var arr = [ 1, x, 'some-string'];

// console.log(arr);

// I want to get specifically 'some-string' out of the array
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// conditional statements if else elseif

/**
 * = : assignment
 * == : comparison
 * === : strict comparison (cares about datatype)
 */

// if (2 >= 2) {
//     console.log('yeah it was true...');
//     console.log('yeah world');
// }

// else its default
// if (false) {
//     console.log('from the if');
// } else {
//     console.log('from the else');
// }

// elseif
/**
 * if
 * elseif (can be if you need)
 * else (can be if you need)
 */

/**
 * possible formats
 */
// if(false) {
//     // do stuff
// } else if(false) {
//     // do stuff
// }

// if(false) {
//     // do stuff
// // make as many else if's as you
// } else if(false) {
//     // do stuff
// } else if(false) {
//     // do default
// } else if(false) {
//     // do other things
// } else {
//     // do default
// }

// if(false) {
//     console.log('if');
// } else if(true) {
//     console.log('else if #1');
// } else if(true) {
//     console.log('else if #2');
// } else {
//     console.log('else')
// }

// if(true) {
//     console.log('true');
// }

// if(true) {
//     console.log('true');
// }

// nesting
// if(false) {
//     if(false) {
//         // this will never happen
//     } else {
//         console.log('else nested inside of an if');
//     }
// } else {
//     console.log('just the parent else');
// }

/**
 * pro tip don't nest if's stmts more than 2 levels deep (just gets confusing)
 */

// if(!password && !username) {
//     if(username && password == true) {
//         // login
//     } else {
//         // error invalid credentials
//     }
// } else {
//     // error fields empty
// }

// LOGICAL OPERATORS : && = AND; || = OR; ! = NOT (opposite)
// if(true && false) {
//     console.log('both were true')
// }

// if(false || true) {
//     console.log('at least one was true');
// }

// Loops : while, do-while : totally useless don't even bother, for : .foreach, for( of ), for( in )

// while
// var done = false;
// var counter = 1;
// += whatever its current value is plus whatever is on the right side of +=
// -= *=

// # of times we've written to the console: 2
// done = true
// counter = 3

// ++ is the same as += 1; increment by 1
// -- is the same as -= 1; decrement by 1
// ** OR // does not exist

// while loops take on parameter
// while(!done) {
//     console.log('iteration...');
//     counter++;
//     console.log(counter);
//     if(counter === 3) {
//         done = true;
//     }
// }

// for loops 3 parameters : 1st = initialize a counter variable; 2nd = condition; 3rd = iterator
// for(i = 0; i < 3; i++) {
//     console.log(`The value of the variable 'i' is...${i}`);
// }

// functions

// define a function
// function keyword => name => parenthesis (put parameters in here if you have any) => { // what you want to do }
// function myFunction() {
//     console.log('hello-world');
// }

// call a function : name followed by parenthesis
// myFunction();

// function that takes parameters
// function greeting(name) {
//     console.log(`Hello ${name}`);
// }

// call a function that has parameters
// greeting('Harcourt');

// functions can have if stmts for loops and while loops inside all of which can be nested as well if need be
