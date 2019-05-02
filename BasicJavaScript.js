var myName = 'Ahad';
var student = 10;

for(var i = 0; i < 20; i++) {
    console.log("My Number : " + i);
}

//console.log('This is a sample test');
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "A "+myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb;
    return result;
}
wordBlanks("dog", "big", "run", "quickly");

function functionWithArgs(num1,num2) {
    console.log(num1+num2);
  }
  functionWithArgs(10,5);

  // Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  
  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}
myOutfit();

function timesFive(num){
    return num*5;
   }
    console.log(timesFive(4));

function timesFive(num){
     return num*5;
   }
    timesFive(4);

    // Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sam = sum + 5;
  return sam; 
}


// Only change code above this line
var returnedValue = addFive();

var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);

  var removedFromArr = arr.shift();
  return removedFromArr;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];
nextInLine(testArr, 6);
testArr[4];

function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue){
      return "Yes, that was true";
  }
  return "No, that was false";
  
  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);

function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);

function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);

function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");

function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);

function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  
  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);


function testGreaterThan(val) {
  if (val > 100 ) {  // Change this line
    return "Over 100";
  }
  
  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);



function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  
  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);



function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25) {
    if (val <= 50) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10)

function testLogicalAnd2(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
          return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd2(10);


function testLogicalOr(val) {
  // Only change code below this line

  if (val >20) {
    return "Outside";
  }

  if (val < 10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);


function testLogicalOr2(val) {
  // Only change code below this line

  if (val >20 || val <10) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr2(15);


function testElse(val) {
  var result = "";
  // Only change code below this line
  
  if (val > 5) {
    result = "Bigger than 5";
  }
  
  else {
    result = "5 or Smaller";
  }
  
  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  
  else if (val < 5) {
    return "Smaller than 5";
  }
  
  else {
  return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);


function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);


function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  }
    else {
  return "Change Me";
  }
  // Only change code above this line
}

// Change this value to test
testSize(7);


var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1){
    return names[0];
  } else if (strokes <= par-2 ){
    return names[1];
  } else if (strokes == par-1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  }  else if (strokes == par+1) {
    return names[4];
  }  else if (strokes == par+2) {
    return names[5];
  }  else if (strokes >= par+3) {
    return names[6];
  } 
  
  return "Change Me";
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);


function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1: 
      answer = "alpha";
    break;
    case 2: 
      answer = "beta";
    break;
    case 3:
      answer = "gamma";
    break;
    case 4: 
      answer = "delta";
    break;
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
caseInSwitch(1);
/**case values are tested with strict equality (===). 
 * The break tells JavaScript to stop executing statements. 
 * If the break is omitted, the next statement will be executed. */

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
    case 1:
    case 2:
    case 3:
     return "Low";
     break;
    case 4:
    case 5:
    case 6:
     return "Mid";
     break;
    case 7:
    case 8:
    case 9:
     return "High";
     break;
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
sequentialSizes(1);



function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    }
      return answer;
}

  

// Change this value to test
chainToSwitch(7);


function isLess(a, b) {
  // Fix this code
    return a < b;
}

// Change these values to test
isLess(10, 15);


function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0){
    return undefined;
  }
  
  
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);


var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count --;
    break;
  }
   if (count > 0) {
     return count+" Bet";
   }  else {
   return count+" Hold";
   }
  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');



var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line


var testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj2["an entree"];   // Change this line
var drinkValue = testObj2["the drink"];    // Change this line


var testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj3[playerNumber];   // Change this Line

//Another example of accessing object properties with variable
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"


//Updating object properties
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog.name = "Happy Coder";

 
//add new properties to a java scipt object
var myDog2 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.
myDog2.bark = "Woof";
//or
myDog2["bark"] = "Woof";

//delete a property from an object
var myDog3 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog3.tails;
// Only change code below this line.


//using object for Lookups

function phoneticLookup(val) {
  var result = "";

  // Only change code below this line

var lookup = {
  "alpha" : "Adams",
  "bravo" : "Boston",
  "charlie": "Chicago",
  "delta" : "Denver",
  "echo" : "Easy",
  "foxtrot" : "Frank"
};

result = lookup[val];
return result; 
}
// Change this value to test
phoneticLookup("charlie");


//testing objects for properties
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  else {
      return "Not Found";
  }
}
// Test your code by modifying these values
checkObj("gift");


//Manipulating complex object
//add new album to myMusic array

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Michael Jackson",
    "title" : "Black Diamond",
    "release_year" : 1990,
    "formats":[
      "CD",
      "Casset",
      "LP"
      ],
      "gold": true
  }
  // Add record here
];

//Accessing nested objects
//example
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"

//task
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

//Accessing nested arrays
//Illustration
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"

//task
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line



//Record collection

var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
if  (prop === "tracks" && value !== ""){
  if(collection[id][prop]){
  collection[id][prop].push(value);
  }
  else {
  collection[id][prop] = [value];
  } 
}
 else if (prop !== "tracks" && value !== "") {
     collection[id][prop] = value;
}

else {
  delete collection[id][prop];
  }
   return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");


/*iterate with while loop */

var myArray1 = [];
var i = 0;
while(i<5){
  myArray1.push(i);
  i++;
}

// Iterate with for loops

var myArray2 = [];
for (var i = 1; i <6; i++){
    myArray2.push(i);
}

// for loops to get odd numbers
var myArray3 = [];
for (var i = 1; i < 10; i += 2){
  myArray3.push(i);
}

//Count backward with for loop

var myArray4 = [];
for (var i = 9; i > 0; i -= 2){
  myArray4.push(i);
}
/* Iterate through an array with a for loop
adding elements one after another to the total  */
var myArr5 = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr5.length; i++){
  total += myArr5[i];
}

//Nesting for loops
//loop through both the array and subarrays
//example
var arr1 = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr1.length; i++) {
  for (var j=0; j < arr1[i].length; j++) {
    console.log(arr1[i][j]);
  }
}

//task

function multiplyAll(arr2) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr2.length; i++){
    for(var j = 0; j < arr2[i].length; j++){
      product = product * arr2[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);


//iterate with java script do...while loops
var myArray6 = [];
var i = 10;

// Only change code below this line.
  do  {
    myArray6.push(i);
    i++;
} while (i < 5);


// profile lookup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (var i = 0; i < contacts.length; i++){
   if (contacts[i].firstName === name) {
       if (contacts[i].hasOwnProperty(prop)){
       return contacts[i][prop];
       }
    else {
       return "No such property";
   }
  }

// Only change code above this line
}  return "No such contact";
}
// Change these values to test your function
lookUpProfile("Akira", "likes");

//generate random fraction

function randomFraction() {

  // Only change code below this line.
    
  return Math.random();

  // Only change code above this line.
}

//generate random whole number

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}

//generate random whole numbers within a range
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin); // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);

//transform string to integer
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

//parseInt function with a radix to decide the base of returned number
function convertToInteger(str, rad) {
  return parseInt(str, 2);
}

convertToInteger("10011");

//use conditional or ternery operator alternate of single line if else statement
function checkEqual(a, b) {
  return a == b ? true : false ;
}

checkEqual(1, 2);

// use multiple conditional or ternery operators

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);


