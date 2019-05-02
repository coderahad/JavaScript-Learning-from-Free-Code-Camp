//Convert celcius to farenheit

function convertToF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
  convertToF(30);

  //Reverse a string

  function reverseString(str) {
    let arr = str.split('');
    arr = arr.reverse();
    str = arr.join('');
    
    return str; // returns 'olleh'
  }
  
  reverseString("hello");

  // Another solution from hint

  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  /*Notice that we don’t leave anything in between the single quotes, this tells the function to split the string by each character.
  split() function will turn our string into an array of characters.
  reverse() function, which takes our array of characters and reverses them.
   Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.*/

  //Factorialize a number
  function factorialize(num) {
    
    if (num === 0){
      return 1;
    }
    
    return num * factorialize(num - 1);// (5*(4*(3*(2*1)))) The last loop returns 1;
  }
  // negative input will cause infinite loop.
  factorialize(5);
  // A very critical solution given in Get a hint section
  //my solution
  function factorialize(num) {
    if(num > 0){
    return num * factorialize(num-1);
    }
    return 1;
  }
  //negative input will return 1.
  factorialize(5);


  //Find the longest word in a string
  // My solution
  function findLongestWordLength(str){
    let arr = str.split(' '); // A space between quotation mark refers to make an array of words. 
    let newArr = [];
    for (let i = 0; i < arr.length ; i++) {
      newArr.push(arr[i].length);
      }
      return console.log( Math.max(...newArr))
    }
    
    findLongestWordLength("A quick brown fox jumped over a lazy dog");
    //my another solution
    function findLongestWordLength(str) {
      str = str.split(' ');
      str = str.map((a)=> a.length);
      return Math.max(...str);
      
    }
    
    findLongestWordLength("The quick brown fox jumped over the lazy dog");

    //Solution from hint
    function findLongestWordLength(str){
      var words = str.split(' ');
      var maxLength = 0;
      console.log(words);
      for (var i = 0; i < words.length; i++){
        if (words[i].length > maxLength ){
          maxLength = words[i].length;
        }
      }
      return maxLength;
    }
    
    findLongestWordLength("A quick brown fox jumped over a lazy dog");

    //Return largest numbers in arrays
    //My solution. I slightly missed to understand the task and produce results in an array of 4 arrays.

    function largestOfFour(arr) {
      let newArr = [];
      let largeVal = [];
      for(var i =0; i < arr.length; i++){
           largeVal = Math.max(...arr[i]);      
         newArr.push([largeVal]);
      }
      return newArr;
    }
    
    let finalArray = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
    
    console.log(finalArray);  

    //Solution from hint

    function largestOfFour(arr) {
      var result =[];
      for (var i = 0; i < arr.length; i ++){
        var largestNum = arr[i][0];
        for (var j = 1; j < arr[i].length; j++){
          if (arr[i][j] > largestNum){
            largestNum = arr[i][j];
          }
        }
        result[i] = largestNum;
      }
      return result;
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

    //Confirming the Ending
    //Solution and explanation from hint

    function confirmEnding(str, target) {
  
      return str.slice(str.length - target.length) === target;
     
    }
    
    confirmEnding("Bastian", "n");
    //my solution
    function confirmEnding(str, target) {
      str = str.split('');
      target = target.split('');
      let count = str.length - target.length;
      for(let i = 0;  i < target.length; i++){
        if(target[i] === str[count]){
          count++;
        } else {
        return false;
        }
      }
      return true; 
    }
    
    confirmEnding("Bastian", "n");


    //Repeat a string
    //Solution and explanation from FCC hint

    function repeatStringNumTimes(str, num) {
      if (num < 0){
        return "";
      } if(num === 1){
        return str;
      } else {
        return str + repeatStringNumTimes(str, num - 1);
      }
     }
     repeatStringNumTimes("abc", 3);

     //my solution
     function repeatStringNumTimes(str, num) {
      let newStr = '';
     if(num > 0){
      for(let i =0; i < num; i++){
        newStr = newStr.concat(str);
      }
      return newStr;
     }
     return newStr;
     }
     repeatStringNumTimes("abc", 3);
     //my another solution
     function repeatStringNumTimes(str, num) {
      let newStr = '';
     if(num > 0){
      for(let i =0; i < num; i++){
        newStr += str;
      }
      return newStr;
     }
     return newStr;
     }
     repeatStringNumTimes("abc", 3);

     //Truncate a string
     //My solution FCC accepts

     function truncateString(str, num) {
      if (str.length > num) {
      let newStr = str.slice(0,num);
      return newStr + "..." ;
      } 
      return str;
    }
    
    truncateString("A-tisket a-tasket A green and yellow basket", 8);
    //my another solution
    function truncateString(str, num) {
      if(str.length > num){
      str = str.slice(0,num) + "...";
      return str;
     }
     return str;
    }
    truncateString("A-tisket a-tasket A green and yellow basket", 8);


    //could not understand the solution from hint. 
    //Their coding does not match with challenge. they reduce the last three charecter to put ... there.
    //As a resuslt, truncateString("Alibaba:", 3) truncateString("Alibaba:", 6) returns the same "Ali..."

    //Finder keepers
    function findElement(arr, func) {

      let num = arr.find(func);
      return num;
    }
    
    findElement([1, 2, 3, 4], num => num % 2 === 0);

    // my solution modified
    function findElement(arr, func) {
      let num = 0;
    
      num = arr.filter(func);
      if(num === []) {
       return undefined;
      }
      return num[0];
    }
    
    findElement([1, 2, 3, 4], num => num % 2 === 0);


    //Boo Who. checking data type
    function booWho(bool) {
      if (typeof(bool) === "boolean"){
       return true;
      }
     return false;
   }
   
   booWho(null);

   // Hnt soulution in concise
   function booWho(bool) {
    return typeof bool === 'boolean';
  }

  // test here
  booWho(null);
  //my solution
  function booWho(bool) {
    if(bool === true || bool === false){
      return true;
    }
    return false;
  }
  
  booWho(null);


  //Title case a sentence

  function titleCase(str) {
    var convertToArray = str.toLowerCase().split(' ');
    var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    });
   
   return result.join(' ');
   }
   
   titleCase("I'm a little tea pot");

   //Same code concisely written
   function titleCase(str) {
 
  str = str.toLowerCase().split(' ').map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase())).join(' ');
   
   return str;
   }
   
   titleCase("I'm a little tea pot");
   // There are more solutions in medium 
   //my another solution
   function titleCase(str) {
    str = str.toLowerCase().split(" ");
    newStr = str.map(function(x){
    return  x.charAt(0).toUpperCase() + x.slice(1);
    })
     return newStr.join(" ");
   }
   
   titleCase("I'm a little tea pot");

   //Slice and Splice
   //Solution from hint

   function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice(0); 
    for (let i = 0; i < arr1.length; i++){
        newArr.splice(n, 0, arr1[i]);
        n++;
    }
    return newArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  //my solution
  function frankenSplice(arr1, arr2, n) {
    let newArr =[...arr2];
    newArr.splice(n,0,...arr1.slice(0));
    return newArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

  //Falsy Bouncer
  //Solution from medium

  function bouncer(arr) {
    var result =[];
    result = arr.filter(function(element){
        return Boolean(element);
    });
    return result;
  }
  
  bouncer([7, "ate", "", false, 9]);
//Concisely 
function bouncer(arr) {
  
  return arr.filter(element => Boolean(element));
}

bouncer([7, "ate", "", false, 9]);


  // Solution from hint
  function bouncer(arr) {
    return arr.filter(Boolean);
  }
  bouncer([7, "ate", "", false, 9]);

  //my solution
  function bouncer(arr) {
    for(let i = 0; i < arr.length; i++){
      if( Boolean(arr[i]) === false){
        delete arr[i];
      }
    }
    return arr.filter(x => x);  
  }
  
  bouncer([7, "ate", "", false, 9]);


  //Where do I belong
  //MY solution and particularly taken from hint
  function getIndexToIns(arr, num) {
    arr = arr.sort((a,b) => a - b);
       for(var i = 0; i < arr.length; i++) {
           if(num <= arr[i]){
               return i;
           }
       }  return arr.length;
     }
    
   
   getIndexToIns([40, 60], 50);
   //my another solution
   function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a,b) => a-b);
  return  arr.indexOf(num);      
  }
  
  getIndexToIns([40, 60], 50);

   //Mutations
   //Solution from hint
   function mutation(arr) {
    var test = arr[1].toLowerCase().split('');
    var target = arr[0].toLowerCase();
    for(var i = 0; i < arr[1].length; i++){
       if(target.indexOf(test[i]) < 0){
         return false;
       }
    }  
    
    return  true;
    }
    
    mutation(["hello", "hey"]);

    //Chunky monkey
    function chunkArrayInGroups(arr, size) {
      let newArr = [];
      let subArr = [];
      for(var i = 0; i < arr.length; i += size){
        subArr =  arr.slice(i, i+size);
        newArr.push(subArr);
      }   
      return newArr;
    }
    chunkArrayInGroups(["a", "b", "c", "d"], 2);
    
    // A little bit concise
    function chunkArrayInGroups(arr, size) {
      let newArr = [];
      for(var i = 0; i < arr.length; i += size) {
         newArr.push(arr.slice(i, i+size));
      }   
     return newArr;
    }
    chunkArrayInGroups(["a", "b", "c", "d"], 2);

    //More solutions are in hint section