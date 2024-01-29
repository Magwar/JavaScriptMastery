console.log("Hello, William");
console.log("Welcome Home");
console.log("How was Your Day Sir?");

var variableName = "Welcome Home Sir";

console.log(variableName);

let day = "Monday";
console.log(day);

day = "Friday";
console.log(day);

const firstName = "William";
console.log(firstName);
// firstName = Mwangi;
// Objects
const place = "Munchkin";
console.log(place);

const person = {
    name: "John",
    age: 30,
    country: "Kenya"
    };
console.log(person);
// Dot Notation
console.log(person.name);
console.log(person.country);
console.log(typeof  person);
console.log(typeof person.name);

const arr = [1,2,3,4,5,6,7]
console.log(arr);
console.log(typeof arr);

const date = new Date();
console.log(date);
console.log(typeof date);

// Comparison Operators
const num1 = 4;
const num2 = 9;
// Greater than
console.log(num1 > num2);
// Greater Than or Equal to
console.log(num1 >= num2);
// Less Than
console.log(num1 < num2);
//Less Than Or Equal To
console.log(num1 <= num2);
//Equal To
console.log(num1 == num2);
//Not equal To
console.log(num1 != num2);
//Strictly Equal To
console.log(num1 === num2);
// Strictly not equal To
console.log(num1 !== num2);

// Strict vs Loose Equality.
// Two values are equal if they have the same value
// They can be of different types (loose equality)
// Two values are strictly equal if they have the same value and are of the same type
// If we want them to be of the same type as well then use strict equality operator (===)
// Loosely Equal
console.log(5 == "5");
// Loosely Equal
console.log(5 == 5);
// Strictly Equal
console.log(5 === 5);
console.log("5" === 5);

console.log("Hello" == "Hello");

// Logical Operators
// AND Both operand are true &&
console.log(true && true);
console.log(true && false);
// OR Either operand is true ||
console.log(true || false);
// NOT Reverses the boolean value !
console.log(!false);

// DECISION MAKING CODE Logic and control flow
const age = 18;
// if(condition){
//     block of code
// }
if(age > 18){
    console.log("You may enter!") //False coz the age must be greater than 18
}else if(age === 18){
    console.log("You're just allowed in, but not for more than 2 Hours!");
}
else{
    console.log("You're NOT allowed in here!");
}
// WHILE LOOP

// while (condition) {
    // Block of code
// }
let i = 0;

while(i < 10) {
    console.log(i);
    i++; //iterations
}
// FOR LOOP

// for([initialization]; [condition]; [final-expression]) {
    //Code
// }

for(let i = 0; i < 10; i++) {
    console.log(i);
}

// FUNCTIONS
console.log("Functions");
// It's a block of code designed to perform a particular task
// A function declaration(Defining a function)
// and a Function call(Calling/Executing a function)

// function name(params) {
//     CodeBlock
// }
let number = 7;
function square(number){
    return number * number;
}
console.log(square(number));