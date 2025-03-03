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

// array declarations
let studentGPA = [3.14, 2.0, 3.5, 4.0];
console.log(studentGPA[2]);
let studentRecord = ["John", 3.15, "Senior", ["fishing", "swimming"]];

// for (let index = 0; index < Array.length; index++){
//     const element = array[index];
// }

const studentOne = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "123 street",
        zip: 48309,
        state: "MI"
    },
    hobby: ["swim", "fish", "dive"],
    isSenior: true,
}

console.log(studentOne.lastName);
console.log(studentOne.address.zip);
console.log(studentOne.hobby[2]);

// structures in JS and object array
const studentStorage = [
    {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "123 street",
        zip: 48309,
        state: "MI"
    },
    hobby: ["swim", "fish", "dive"],
    isSenior: true,
}, 
{
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "123 street",
        zip: 48309,
        state: "MI"
    },
    hobby: ["swim", "fish", "dive"],
    isSenior: true,
}
];

console.log(studentStore[1].firstName);

// Functions:
// traditional way of declaring a function in JS
function sum(int ,param1, param2) {
    // declare or put additional logic here
    return param1 + param2;
}

// invoke or call the function
let value1 = 3;
let value2 = 5;
let sumOutput = sum(2, 5);


// Arrow function syntax in JS

// input --> function body --> output 
let name = (param1, paramK) => {
    // Function body
};

let sumArrowFunction = (param1, param2) => {
    return param1 + param2;
};

// call the above function
console.log(sumArrowFunction(2, 4));

// call 