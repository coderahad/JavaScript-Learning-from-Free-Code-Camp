//Use the javascript console to check the variable

let a = 5;
let b = 1;
a++;
// Add your code below this line


let sumAB = a + b;
console.log(a);


//Understanding the differences between the freecodecamp and the browser console


// Open your browser console
let outputTwo = "This will print to the browser console 2 times";
// Use console.log() to print the outputTwo variable
console.log(outputTwo);

let outputOne = "Try to get this to log only once to the browser console";
// Use console.clear() in the next line to print the outputOne only once
console.clear();
console.log(outputOne);
// Use console.log() to print the outputOne variable

//Use of typeof to check the type of a variable
console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object"
/*JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol (new with ES6) and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object*/

//task
let seven = 7;
let three = "3";
console.log(seven + three);
// Add your code below this line
console.log(typeof seven);
console.log(typeof three);

//Catch misspelled variable and function names

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//Debugging: Catch Unclosed Parentheses, Brackets, Braces and Quotes

//Catch mix uses of single and double quotes

// These are correct:
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
// This is incorrect:
//const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';

// Correct use of same quotes:
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';

//Catch use of assignment operator instead of equality operator

let x = 1;
let y = 2;
if (x = y) {
 // this code block will run for any value of y (unless y were originally set as a falsy)
} else {
 // this code block is what should run (but won't) in this example
} // "falsy" values: false, 0, "" (an empty string), NaN, undefined, and null.

// task
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}

console.log(result);

//Catch missing open and closing parenthesis after a function call

function myFunction() {
 return "You rock!";
}
let varOne = myFunction; // set to equal a function
let varTwo = myFunction(); // set to equal the string "You rock!"
console.log(varOne);
console.log(varTwo);
console.log(varOne());

//Catch arguments passed in the wrong order when calling a function
function raiseToPower(b, e) {
 return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

//Catch off by one errors when using indexing

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
 // loops one too many times at the end
 console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
 // loops one too few times and misses the first character at index 0
 console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
 // Goldilocks approves - this is just right
 console.log(alphabet[k]);
}

//Use caution when reintializing  variables inside a loop
function zeroArray(m, n) {
 // Creates a 2-D array with m rows and n columns of zeroes
 let newArray = [];
 //let row = [];  It is wrong place to reintialize row array
 for (let i = 0; i < m; i++) {
   // Adds the m-th row into newArray
   let row = [];
   for (let j = 0; j < n; j++) {
     // Pushes n zeroes into the current row to create the columns
    row.push(0);
   }
   // Pushes the current row, which now has n zeroes in it, to the array
  newArray.push(row);
 }
 return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);

//Prevent infinite loops with a valid terminal condition

/*One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition. Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it.*/

function myFunc() {
 for (let i = 1; i <= 4; i += 2) {
   console.log("Still going!");
 }
}




