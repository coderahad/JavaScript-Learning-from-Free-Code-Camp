// ES6

//Explore difference between the var and let keywords

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

//compare scopes of the var and let keywords

function checkScope() {
  "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }

  //Declared variable with const cannot be reassign. it's a read only variable.

  function printManyTimes(str) {
    "use strict";
  
    // change code below this line
  
    const SENTENCE = str + " is cool!";
    for(let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
    // change code above this line
  
  }
  printManyTimes("freeCodeCamp");

  // constant variables are also mutable but not reassignable
  
  const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  s[0] = 2; s[1] = 5; s[2] = 7;
  // s = [2, 5, 7]; <- this is invalid
 return s;
 
  // change code above this line
}
editInPlace();

// prevent object mutation

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; //will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}


//arrow functions to write concise anonymous functions

const myFunc1 = function() {
  const myVar = "value";
  return myVar;
}

const myFunc2 = () => {
  const myVar = "value";
  return myVar;
}
//we can simplify this smaller function into one-line statement
const myFunc3 = () => "value";

//write arrow functions with parameter
const doubler = (item) => item * 2;

//defalt parameters for function

function greeting(name = "Anonymous") {
  return "Hello " + name;
}
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

// task

const increment = (function() {
  "use strict";
  return function increment(number , value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

// Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const{tomorrow : {max : maxOfTomorrow}} = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

//USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM ARRAYS
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
   [a,b] = [b , a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
/**const [b,a] = [a,b] will result in the value of a,b as undefined because of the effect of local scope
 * (simple assignment rule left to right).

Hence the solution to this problem is [b,a] = [a,b] */
//DESTRUCTURING ASSIGNMENT WITH THE REST OPERATOR TO REASSIGN ARRAY ELEMENTS
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a,b,...arr] = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

//USE DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION'S PARAMETER

const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half({max, min}) {
    // use function argument destructuring
    return (max + min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

//Higher order function from the coding train youtube channel

function sing (callback){
  console.log("la la la la");
  if (callback instanceof Function){
    callback();   // it is a instance of calling a function inside a function
  }
}

function meow () {
  console.log("meow meow");
}

// higher order function  create a function inside a function

function multiplier(factor) {
  return function(x){
    return x * factor;
  }
}

let doubler = multiplier(2);
let tripler = multiplier(3);
// another way to write this same function with arrow 

function multiplier2(factor){
  return x => x * factor; 
}
let quadropler = multiplier2(4);
/*(x) can be written withount function when arrow used. Even () can be omitted if the function has only one parameter like here and also 
return is not necessary to mention*/

// map function from the coding train youtube channel

let vals = [4,8,1,2,9];
console.log(vals);

function doubler(x) {
  return x * 2;
}

let doubled = vals. map(doubler);
console.log(doubled);
// map(), filter(), reduce(), etc. array functions create a new array and do not modify the old array. 
//same code with arrow function

let vals2 = [1,5,6,7,3];
console.log(vals2);
vals2 = vals2.map(x => x * 3);
console.log(vals2);

//fill() function does create a new array but acts on the current array 

let vals3 = [1,3,5,7,8];
vals3.fill(0);
console.log(vals3);

// fill vals3 with random number

vals3.fill(Math.random());
console.log(vals3);
// fill each position in a arrray with a different number.Here fill does not work.We need map function for this.

vals3 = vals3.map(x=> Math.random());
console.log(vals3);
//can be rewritten
vals3 = vals3.map(Math.random);
// create a new array of 100 element and fill them with 0 and then replace the 0 with random numbers with map function
let vals4 = Array(100);
vals4 = vals4.fill(0).map(Math.random);
console.log(vals4);
// this code can be re written 

vals4 = Array(100).fill().map(Math.random);  // fill() means fill with empty space

// reduce function from the coding train youtube channel

let vals = [5,4,1,2,9]
function sum (acc , val){
      return acc + val;
}
let answer = vals.reduce(sum, 0);
console.log(answer);

// Same code rewritten here

let  answer = vals.reduce((acc,sum) => acc + sum, 10); // 10 is optional accumulator initialzation
console.log(answer);
// another example of reduce function

let vals = [5,4,1,2,9]

function findMax(acc,val) {
  if (val > acc){
    acc = val
  } 
  return acc;
}
let biggest = vals.reduce(findMax);
console.log(biggest);
// again

let biggest = vals.reduce((acc,val) => {
  if (val > acc){
    acc = val;
  }
  return acc; 
} );
console.log(biggest);

// same coding using ternery operator 
let biggest = vals.reduce((a, b) => b > a ? b : a) ;
console.log(biggest);


// filter() from the coding train. filter function filters an array on given conditions.

let vals = [5,4,1,2,9]

function isEven(num){
  return (num % 2 == 0);
}
vals = vals.filter(isEven);
console.log(vals);
// differently

vals = vals.filter(x => x % 2 == 0);
console.log(vals);
// for odd ones
vals = vals.filter(x => x % 2 == 1);
console.log(vals);
// for not ones
vals = vals.filter(x => !(x % 2 == 1));
console.log(vals);
// only odds
vals = vals.filter(x => x % 2);
console.log(vals);
// only evens
vals = vals.filter(x => !(x % 2));
console.log(vals);

//FCC ES6 write higher order arrow function challenge
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter( x => x > 0 && x % parseInt(x) === 0 ).map( x => Math.pow(x, 2) );
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
// Spread operator from freecodecamp Youtube channel. Teacher Beau Carnes
// spread operator
var certsToAdd = ['fish', 'beef'];
var certifications =['This is to certify', 'that', 'he', 'eats', ...certsToAdd, 'mutton', 'and chicken'];
console.log(certifications);

//array can be passed as an argument to a function.spread array also can be passed as an argument
function addThreeNumbers(x,y,z){
  return x+y+z;
}
var args = [1, 2, 3];
console.log(addThreeNumbers(...args));
// spread operator to copy array

var arr = [0, 1, 2];
var arr2 = [...arr];
console.log(arr2);
// we can concate two arrays by this process
var arr1 =[1, 2, 3];
var arr2 = [4, 5, 6];
arr1.concat(arr2);
// We can do this by spread operator

arr1 = [...arr1, ...arr2];
console.log(arr1);

//Rest operator from MDN 
/* Rest is the opposite of spread operator. It assigns values to an array that is passed as an argument
 to a function.*/
// there is no need to declare the variable seperately. 


function myFun(a, b, ...manyMoreArg){
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArg", ...manyMoreArg);
}

myFun("one","two", "three", "four", "five");

// count elements of theArg

function fun1(...theArg){
  console.log(theArg.length);
}
fun1();
fun1(5);
fun1(5 , 6, 7);

//multiplying all the arguments of an array by a multiplier using rest operator

function multiply(multiplier, ...theArg){
  return theArg.map(num => multiplier * num);
}
var arr = multiply(2, 1, 2, 3);
console.log(arr);

// FCC Use the Rest operator with Function Parameters 
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

//Use the spread operator to evaluate the arrays in -place.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2=[];
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);

//use destructuring with the rest operator to reassign array elements

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  let [a,b, ...arr] = source; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
//or
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
// task

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half({max, min}) {
    // use function argument destructuring
    return (stats.max + stats.min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

//Create string using template literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray =  [ `<li class="text-warning">${arr[0]}</li>`,
    `<li class="text-warning">${arr[1]}</li>`, 
    `<li class="text-warning">${arr[2]}</li>` ];
  // change code above this line

  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);

//Concise Object Literal declaration using simple fields
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
//or
const createPerson = (name, age, gender) => ({name, age, gender});

  console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

//Concise declarative function with ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

//The constructor function in javascript from the coding train youtube channel

var bubbles = [];

function setUp(){
    createCanvas(600, 400);
    for (var i = 0; i < 4;  i++) {
      bubbles[i] = new Bubble();
    } 
}

function draw (){
  background(0);
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
  }
}


function Bubble(){
  this.x = random(0, width);
  this.y = random(0, height);
  this.display = function(){
    stroke(255);
    nofill();
    ellips(this.x, this.y, 24, 24);
  }
  this.move = function(){
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);

  }
}

//Use class syntax to define a constructor function

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable{
    constructor(name){
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

// constructor function to create object my practice
function babla (abul) {
  this.x = 100;
  this.y = 200;
  this.z = abul; 
  } 



let abla = new babla(10);


console.log(abla);

// class contructor to create a new object my own way

class babla{
  constructor (abul) {
   this.x = 100;
   this.y = 200;
   this.z = abul; 
   } 
 }
 
 
 let abla = new babla(10);
 
 
 console.log(abla);
// getter and setter in my own way
class babla{
  constructor () {
  this.x = 100;
  this.y = 200;
  }
  get komol(){
    return this.x;
  }
  set komol(dhobol) {
    this.x = dhobol;
  }
}

let abla = new babla();
console.log(abla);
console.log(abla.x);// general system to reach object value 

console.log(abla.komol); //get the object value using get().  return 100
abla.komol = "nickel"; // changing the value using set(). 
console.log(abla.komol);// here the x changed
console.log(abla); // Now x has been overwritten and produce different output

//Use getters and setters to control access to an object
class Thermostat {
  constructor(farenheit){
      this.farenheit = farenheit;
  }
  get temperature(){

   return 5/9 * (this.farenheit - 32);   
  }

  set temperature(celsius){
      this.farenheit = celsius * 9/5 +32;
  }
} 

const thermos = new Thermostat(76);
const tempo = thermos.farenheit;

console.log(tempo);
console.log(thermos.temperature);
thermos.temperature = 80;
console.log(thermos.temperature);

//A different coding for this problem from freecodecamp forum
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(farenheit){
        this._farenheit = farenheit;
    }

    get temperatureInC(){
    //   console.log('this._farenheit', this._farenheit);
    //   console.log('temperatureInC', 5/9 * (this._farenheit - 32));
        
      return 5/9 * (this._farenheit - 32);   
    }

    set temperatureInC(celsius){
        console.log('temperatureInC', celsius * 9/5 +32);
        this._farenheit = celsius * 9/5 +32;
    }

    get temperatureInF() {
      return this._farenheit;
    }

    set temperatureInF(farenheit) {
      this._farenheit = farenheit;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperatureInC; // 24.44 in C
//console.log(temp);
thermos.temperatureInC = 26;
console.log(thermos.temperatureInF);
// temp = thermos.temperatureInC; // 26 in C


//Undrestand the differences between import and require

"use strict";
capitalizeString("hello!");
import { capitalizeString } from "string_functions"

// Use export to reuse a code block
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }
// Use * to import everything from a file

import * as myObject from "capitalize_strings";
//Create an Export fallback with an export default
export default function subtract(x,y) {return x - y;}

//Import a default export
"use strict";
import subtract from "math_functions" ;
subtract(7,4);