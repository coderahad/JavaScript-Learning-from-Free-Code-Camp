//Use an array to store a collection of data

// logs 7

let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];

//task

let yourArray= ["ahad", 33, true, {name: "a", game: "b"}, [0,1]]; // change this line

//Access an arrays content using bracket notation

let myArray = ["a", "b", "c", "d"];
// change code below this line
myArray[1] = "ahad"
//change code above this line
console.log(myArray);

//Add items to an array with push() and unshift()

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']

//task

function mixedNumbers(arr) {
  // change code below this line
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three');
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

//Remove items from an array with pop() and shift()

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']

let popped = greetings.pop();
// returns 'hello'
// greetings now equals []

//task
function popShift(arr) {
  let popped = arr.pop(); // change this line
  let shifted = arr.shift(); // change this line
  console.log(arr);
  return [shifted, popped];
  
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//Remove items using splice();
// splice() remove any number of consecutive elements from anywhere in an array.
//splice() can take up to 3 parameters
/*splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example*/
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
/*splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:*/

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']


//task
function sumOfTen(arr) {
  // change code below this line
  arr.splice(1, 2);
  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

//Add items using splice()
function colorChange(arr, index, newColor) {
  arr.splice(index, 1, newColor);
  return arr;
}

let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];

colorScheme = colorChange(colorScheme, 2, '#332327');
// we have removed '#bb7e8c' and added '#332327' in its place
// colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']

//Task

function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // change code above this line
  return arr;
} 
 
// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

//Copy array items using slice();
/* slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). */
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

//Task
function forecast(arr) {
  // change code below this line
  arr = arr.slice(2, 4);
  return arr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//Copy an arry with the spread operator
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray

//task

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
      newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2)); //console shows two array of three elements in a array

//The Get a hint of this challenge has some important technical term to remember. So I paste here some lines of it.
/*The spread operator copies all elements into a new empty object.
while (num >= 1) {
    newArr = [...arr]   
    num--;
}
The code above will copy all of the elements into newArr but will also reinitialise newArr with every new iteration of the while loop.
A new variable should first be initialised using the spread operator - let obj = [...arr]; - then this variable should be added to the newArr for every iteration of the while loop.
 */
//Same Task solution according to the above instruction

function copyMachine(arr, num) {
  let newArr = [];
  let obj = [...arr];
  while (num >= 1) {
    // change code below this line
      newArr.push([obj]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
/* console shows two arrays containing one element in a array since obj is a variable of an array of three elements*/

//Combine arrays with the spread operator

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

//Check for the presence of an element with indexOf();
/**indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
 * 
 */

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates') // returns -1
fruits.indexOf('oranges') // returns 2
fruits.indexOf('pears') // returns 1, the first index at which the element exists

// Task
function quickCheck(arr, elem) {
  // change code below this line
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//Another solution
function quickCheck(arr, elem) {
  // change code below this line
  return arr.indexOf(elem) >= 0 ? true : false;
  
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//Iterate through all an array's items using for loops

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  
 for (let i = 0; i < arr.length; i++) { 
    if (arr[i].indexOf(elem)==-1){ //Checks every parameter for the element and if is NOT there continues the code
          newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
            };
          };

  // change code above this line
  return newArr;
};
// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//Create complex multi-dimensional arrays

let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];

console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?

nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
// now logs: deeper still

//task

let myNestedArray = [
  // change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array',['deep',['deeper',['deepest']]]],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // change code above this line
];

//Add key-value pairs to JavaScript objects

let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
};

let userData = FCC_User.followers;
// userData equals 572

let userData = FCC_User['followers']
// userData equals 572
/**Had we passed followers in without the quotes, the JavaScript engine would have attempted to evaluate it as a variable, and a ReferenceError: followers is not defined would have been thrown.
 * 
 */

 //Task

 let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

// change code below this line

// change code above this line

console.log(foods);

//Modify an object nested within an object

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13
    }
  }
};


//Task

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
userActivity.data.online = 45;
// change code below this line

// change code above this line

console.log(userActivity);

//Access property names with bracket notation

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line
  return  foods[scannedItem];
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));

//Use the delete keyword to remove object properties

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
delete foods.oranges;
delete  foods.plums; 
delete foods.strawberries;
// change code below this line

// change code above this line

console.log(foods);


//Check if an object has a property
//Here user is the object and Alan is the property
users.hasOwnProperty('Alan'); 
'Alan' in users;
// both return true

/**We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument. Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise. */ 

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
    return obj.hasOwnProperty('Alan', 'Jeff', 'Sarah', 'Ryan'); //The function checks Only the first element  
  // change code above this line
}

console.log(isEveryoneHere(users));

//Iterate through the keys of an object with a for...in statement
for (let user in users) {
  console.log(user);
};

// logs:
// Alan
// Jeff
// Sarah
// Ryan

/** Task We've defined a function, countOnline; use a for...in statement within this function to loop through the users in the users object and return the number of users whose online property is set to true.
 * 
 */
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
    let result = 0;
    for (let user in obj){
      if (obj[user].online === true){
        result++ ;
      }
    }
    return result;
  // change code above this line
}

console.log(countOnline(users));

/**Method:

Note:
* dot-notation will cause errors in this challenge.
* [square-bracket] notation must be used to call a variable property name.
* The following code will not work.
Example 1:
for (let user in obj) {
    if(obj.user.online === true) {
      //code
    }
  }
* Example 2 demonstrates how using [square-bracket] notation the code will be executed.
Example 2:
for (let user in obj) {
    if(obj[user].online === true) {
      //code
    }
  }
 * 
 */

/*Generate an array of all object keys with Object.keys()  
Again, there will be no specific order to the entries in the array.*/

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line
  let arr = Object.keys(obj)
  return arr;
  // change code above this line
}

console.log(getArrayOfUsers(users));

//Modify an array stored in an object
/**Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
 * 
 */

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line  
    userObj.data.friends.push(friend);
    return userObj.data.friends;
  // change code above this line
}

console.log(addFriend(user, 'Pete'));


