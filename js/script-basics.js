// this is a comment in JS
/*
this is a multiline comment 
*/




// how to print output in JS
console.log("This is my first output from JS");
console.warn("This is a warning from js");
console.error("This is an error from js");

// Variables in JS
// datatype variableName = value;
// variable = value
// js: scope_specifier variableName = value;

var name = "John"; // Global scope if declared using var (DO NOT USE THIS)
//let lastName = "Doe"; // Local scope specifier -- preferred
const PI = 3.14; // this will not allow to reassign any value to variable PI
// datatypes: string, number, boolean
// arithmatic operators: + - / * 
// logical operators && || ! 

// some more ways to interact or output data to your clients
// // dont use this if you can

// brute force way of getting input from users
// let age = prompt("What is your age?");
// alert(age);
// String concatenation techniques 
let firstName = "John";
let lastName = "Wick";
console.log("The full name is" + firstName + lastName + "Hello world");
// efficent way in JS to achieve the above code in line 35
// String literals
console.log(`The fullname is ${firstName} ${lastName} Hello world`);

// branching and decision statements:

let age = 18;
if(age > 21){
    console.log("The user can drive");
} else {
    console.log("The user cannot drive");
}

// Loops
let loopIterator = 1;
while(loopIterator < 10){
    console.log(`This is iteration #: ${loopIterator}`);
    loopIterator = loopIterator + 1;
}