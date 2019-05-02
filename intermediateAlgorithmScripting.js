//Intermediate Algorithm

//SUM ALL NUMBERS IN A RANGE

function sumAll(arr) {
    let newArr = [];
    if (arr[0] < arr[1]){
    for(var i = arr[0]; i <= arr[1]; i++) {
      newArr.push(i);
     }
    } else {
      for(var i = arr[0]; i >= arr[1]; i--){
        newArr.push(i);
      }
    }
    return newArr.reduce((x,y) => x + y);
  }
  
  sumAll([1, 4]);
  
  //my another solution for more than two numbers.

  function sumAll(arr) {
    arr.sort((a,b) => a-b);
    console.log(arr);
    let sum = 0;
    for(let i = arr[0]; i <= arr[arr.length-1]; i++){
        sum += i;
    }
    return sum;
  }
  
  sumAll([1,5,4,7]);

//more solutions in hint section


// DIFF TWO ARRAYS

function diffArray(arr1, arr2) {
  var newArr = [];
  function onlyInFirst(first,second) {
  for(var i = 0; i < first.length; i++){
    if(second.includes(first[i]) === false){
      newArr.push(first[i]);
      }
    }
  }
  
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// my another solution
function diffArray(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++){
      for(let j =0; j < arr2.length; j++){
          if (arr1[i] === arr2[j] ){
              delete arr1[i];
              delete arr2[j];
          }
      }
  }
  return  arr1.concat(arr2).filter(x => Boolean(x));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//another solution from hint
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item) 
    )
}

diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]);

//more interesting solutions are in hint section

//SEEK AND DESTROY

function destroyer(arr) {
  var arg = Array.prototype.slice.call(arguments); 
  for(var i= 0; i < arr.length; i++){
    for(var j =0; j < arg.length; j++){
      if (arr[i] === arg[j]){
        delete arr[i];
      }
    }
  }
    return arr.filter(Boolean);
 }

 /*Array.prototype.slice.call(arguments) converts all arguments of a function into one array.
 when we delete elements empty space remains in array. To remove those empty spaces we use filter(Boolean).
*/

//another solution from hint

var destroyer = function(arr, ...arg){
  return arr.filter(x => !arg.includes(x))
   }
 destroyer([1, 2, 3, 1, 2, 3], 2, 3);

 /**...arg denotes array of other arguments. for example, if we code this 
  * var destroyer = function(arr, ...arg){
   return [...arg];
    }
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  returns [2,3]
  */

  // another my solution
  function destroyer(arr) {
    let newArr = [...arguments[0]];
    for(let i =1; i < arguments.length; i++) {
      for(let j = 0; j < newArr.length; j++) {
        if (arguments[i] === newArr[j]){
          delete newArr[j];
        }
      }
    }
    return newArr.filter(x => Boolean(x));
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  //WHERFORE ART THOU

  function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);
    return collection.filter(function(obj){
      for( var i = 0; i < srcKeys.length; i++){
        if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
          return false;
        }
      }
      return true;
    });
   }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// knew new thing here Object.keys()

//SPINAL TAP CASE
/**Spinal tap case is all-lowercase-words-joined-by-dashes.
 * 
 */
// task

function spinalCase(str) {

  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');

//I tried it differenty 

function spinalCase(str) {

  return str.split(/\W+|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');

/**It works in all cases except the one. 
 * spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
 * this is because I used \W which inclueds /[^A-Za-z0-9_]/. So it matches underscores.
 * To get rid of these undercore we used that /\s|_ / regex. 
 */
// my slightly changed above solution
function spinalCase(str) {
   return str = str.split(/\W+|_|(?=[A-Z])/).join('-').toLowerCase();
}
spinalCase('This Is Spinal Tap');
// this (?=[A-Z]) one is specially for the case
//spinalCase("thisIsSpinalTap") and spinalCase("AllThe-small Things"); the breaking points are Uppercase letter.

 //PIG LATIN
 /**Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the 
  * end of the word and suffixes an "ay".If a word begins with a vowel you just add "way" to the end.
  */

 function translatePigLatin(str) {
  var pigLatin = '';
  var regex = /[aeiou]/gi;
  if(str[0].match(regex)) {
    pigLatin = str + 'way';
  } else if(str.match(regex) === null){
    pigLatin = str + 'ay';
  } else {
   var vowelIndice = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelIndice) + str.substr(0 , vowelIndice) + "ay";
  }
  return pigLatin;
}

translatePigLatin("consonant");


/** if var str = "consonant"); then str[0].match(regex) returns null.
 * str.match(regex)[0] returns ['o'], str.match(regex)[2] returns ['a'].
 * str.indexOf(str.match(regex)[0]) returns 1; str.indexOf(str.match(regex)[2]) returns 6.
 * str.match(regex) returns [o, o, a];
 * substring() and substr() are important from MDN. 
 */

 //SEARCH AND REPLACE
//task

function myReplace(str, before, after) {
  var index = str.indexOf(before);

  if(str[index] === str[index].toUpperCase()){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }

  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//another solution
function myReplace(str, before, after) {
  let newStr = "";
  var index = str.indexOf(before);
  if(str[index] === str[index].toUpperCase()){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  newStr = str.slice(0,index) + after + str.slice(index + before.length); 
  return newStr;  
   
 }
 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//DNA PAIRING
/**The DNA strand is missing the pairing element.
 * Take each character, get its pair, and return the results as a 2d array. 
 * Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 * Return the provided character as the first element in each array.
 * For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 */

//My solution
function pairElement(str) {
  var newStr = str.split('');
  var encapsulateArr =[];
  for(var i = 0; i < newStr.length; i++){
    var insideArr = [];
    insideArr.push(str[i]);
    encapsulateArr.push(insideArr);
  }
  for(var j =0; j < encapsulateArr.length; j++){
    if(encapsulateArr[j][0]==="G"){
      encapsulateArr[j].push("C");
    } else if(encapsulateArr[j][0]==="C"){
      encapsulateArr[j].push("G");
    } else if(encapsulateArr[j][0]==="A"){
      encapsulateArr[j].push("T");
    } else if(encapsulateArr[j][0]==="T"){
      encapsulateArr[j].push("A");
    } else encapsulateArr;
  }

  return encapsulateArr;  
}

pairElement("GCG");


//MISSING LETTER
/*Find the missing letter in the passed letter range and return it.
 if all letters are present in the range, return undefined.*/
//solution from hint

 function fearNotLetter(str) {
  
  for(var i = 0; i < str.length; i++){
    var code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i){
      return String.fromCharCode(code-1); // or String.fromCharCode(str.charCodeAt(0) + i);
    }
  }
  return  undefined;
}

fearNotLetter("abce");

//my solution
function fearNotLetter(str) {
  let startCode = str.charCodeAt(0) - 1;
  for(let i = 0; i < str.length; i++){
    startCode++;
    if(str.charCodeAt(i) !== startCode){
      return String.fromCharCode(startCode);  
    }
  } 
}

fearNotLetter("abce");


//SORTED UNION
/**here I put some experiment code
 * function uniteUnique(arr) {
var arg = Array.prototype.slice.call(arguments);
var newArg = [];
for(var i =0; i < arg.length; i++){
   newArg = newArg.concat(arg[i]);
}
return newArg;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
 * returns [1, 3, 2, 5, 2, 1, 4, 2, 1];
*/
/**
 * function uniteUnique(arr) {
var arg = Array.prototype.slice.call(arguments);

return arg;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
returns [[1, 3, 2], [5, 2, 1, 4], [2, 1]]
 */
/**function uniteUnique(arr) {
var arg = [...arguments];

return arg;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
 * returns [[1, 3, 2], [5, 2, 1, 4], [2, 1]]
 */

 //task
 //solution from hint
 function uniteUnique(arr) {
  var arg = [...arguments];
  var result = [];
  for(var i = 0; i < arg.length; i++){
      for(var j =0; j < arg[i].length; j++){
          if(!result.includes(arg[i][j])){
              result.push(arg[i][j]);
          }
      }
  }
  return result;
  }
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//my solution
function uniteUnique(arr) {
  let newArr = [];
  for(let i = 0; i < arguments.length; i++){
    for(let j = 0; j < arguments[i].length; j++){
      if(!newArr.includes(arguments[i][j])){
        newArr.push(arguments[i][j]);
      }
    }
  }
   return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//an interesting solution from hint
function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    //console.log(x);
    //console.log(item); // learnt new things about filter 
    return concatArr.indexOf(item) == pos;
    
  });
  return uniqueArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  //more solutions are in hint

  //CONVERT HTML ENTITIES
  //My own solution
  function convertHTML(str) {
    str = str.split('');
    for(var i = 0; i < str.length; i++){
       if(str[i] === "&"){
         str[i] = "&amp;";
     } else if(str[i] === "<"){
         str[i] = "&lt;";
     } else if(str[i] === ">"){
         str[i] = "&gt;";
     } else if(str[i] === "'"){
         str[i] = "&apos;";
     } else if(str[i] === '"'){
         str[i] = "&quot;";
     } else str[i];
    }
     return str.join("");
   }
   
   convertHTML("Dolce & Gabbana");

   //More solutions are in hint

   //SUM ALL ODD FIBONACCI NUMBERS
   //task solution from hint
   function sumFibs(num) {
    var prevNum = 0;
    var currNum = 1;
    var result = 0;
    while(currNum <= num){
        if(currNum%2 !== 0){
            result += currNum;
        }
        currNum += prevNum;// present cur num added with prev num makes new cur num.e.g cur = 2+1
        prevNum = currNum - prevNum;// old prev num subtract from new cur num makes new prev num.e.g pre = 3-1
    }                         // that's how new prev num takes the value of old curr num. 
              //[x, y, z].if x+y = z then z-x = y. 
    return result;
  }
  
  sumFibs(10);
  //my solution
  function sumFibs(num) {
    let arr = [1,1];
    let element = 0;
    for(let i = 1; element <= num; i++){
      element = arr[i] + arr[i-1];
      arr.push(element);
    }
    arr.pop();
    return arr.filter(x => x % 2 !== 0).reduce((a,b)=> a + b);
  }
  
  sumFibs(10);


  //SUM ALL PRIMES
  //task solution from hint 
  function sumPrimes(num) {
    function isPrime(num){
        for(var i = 2; i < num; i++){
            if (num % i === 0 && num != i){
                return false;
            }
        } return true;
    } if(num === 1){
        return 0;
    } else if(isPrime(num) === false ){
        return  sumPrimes(num-1);
    } else if(isPrime(num) === true){
        return num + sumPrimes(num-1);
    }
}
sumPrimes(10);
// another solution
function sumPrimes(num) {
  let arr = [];
  for(let i = 2; i <= num; i++){
     arr.push(i);
  }
  arr = arr.filter(function(x) {
      for(let j = 2; j < x; j++){
         if(x % j === 0 && x != j){
          return false;
        }
      }return true;
    }
  )
return arr.reduce((a,b)=> a + b);
 
}
sumPrimes(10);


//SMALLEST COMMON MULTIPLE
/**Find the smallest common multiple of the provided parameters 
 * that can be evenly divided by both, as well as by all sequential numbers in the range
 *  between these parameters.
 * task solution from hint.
 */
function smallestCommons(arr) {
  arr.sort(function(a,b){
      return b - a;
  });
  var newArr = [];
  for(var i = arr[0]; i >= arr[1]; i--){
      newArr.push(i);
  }

  var qout = 0;
  var loop = 1;
  var n;
  do {
      qout = newArr[0] * loop * newArr[1];
      for(n = 2; n < newArr.length; n++){ // value of n become 5;
          if(qout % newArr[n] !== 0){
              break;
          }
      } loop++;
  } while(n !== newArr.length) //n.b. here value of n is 5; To check return n.
  return qout; 
}
smallestCommons([1,5]);

//Important thing do..while loop.

//DROP IT
/**Given the array arr, iterate through and remove each element starting from the 
 * first element (the 0 index) until the function func returns true
 *  when the iterated element is passed through it.
 *  Then return the rest of the array once the condition is satisfied, 
 * otherwise, arr should be returned as an empty array.
 * 
 */
function dropElements(arr, func) {
  var times = arr.length; // shift() reduce the array length in each iteration.
for(var i = 0; i < times; i++) {
   if(func(arr[0])){ // Every time check the first element if it pass the func condition.
       break;
   } else {
     arr.shift();
   }
} return arr;

}

dropElements([1, 2, 3], function(n) {return n < 3; });

//STEAMROLLER
//Flatten a nested array.
// task from hint

function steamrollArray(arr) {
  var flat = [].concat(...arr);
  return  flat.some(Array.isArray) ? steamrollArray(flat) : flat;

}

steamrollArray([1, [2], [3, [[4]]]]);

//BINARY AGENTS
//Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
  var biString = str.split(' ');
  var uniString = [];
  for(var i = 0; i < biString.length; i++){
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  return uniString.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//EVERYTHING BE TRUE
// task solution from hint

function truthCheck(collection, pre) {
  
  return collection.every(function(element){
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  })

}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


//ARGUMENTS OPTIONAL
//task solution from hint

function addTogether() {
  var checkNUm = function(num){
    if(typeof num !== 'number'){
      return undefined;
    } else{
      return num;
    }
  };  
  if(arguments.length > 1){
  var a = checkNUm(arguments[0]);
  var b = checkNUm(arguments[1]);
     if( a === undefined || b === undefined){
       return undefined;
     } else
     return a + b; 
   }

   else {
     var c = arguments[0];

     if(checkNUm(c)){   // Check the number again, must be outside the function to about returning an object instead of undefined
       return function(arg2){
         if(c === undefined || checkNUm(arg2)=== undefined){
           return undefined;
         } else
          return c + arg2;
       };
     }
   } 
}

addTogether(2)(3);

//MAKE A PERSON
//Task from hint

var Person = function(firstAndLast) {
  let fullname = firstAndLast.split(' ');
  this.getFullName = function() {    
    return fullname.join(' ');
  };
  this.getFirstName = function() {
    return fullname[0];
  };
  this.getLastName = function() {
    return fullname[fullname.length - 1];
  };
  this.setFirstName = function(first) {
    return fullname[0] = first;
  };
  this.setLastName = function(last) {
    return fullname[fullname.length - 1] = last;
  };
  this.setFullName = function(firstAndLast) {
    let newName = firstAndLast.split(' ');
    fullname[0] = newName[0];
    fullname[fullname.length - 1] = newName[newName.length - 1];
    return fullname.join(' ');
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();


//MAP THE DEBRIS
//task solution from hint
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  var calculateAndChange = function(obj) {
    var T = 2 * Math.PI * Math.sqrt(Math.pow((earthRadius + obj.avgAlt), 3) / GM);
    
    delete obj.avgAlt;
    obj.orbitalPeriod = Math.round(T);
  }
  for( var i in arr){
      calculateAndChange(arr[i]);
   }
   return arr; 
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
