//Learn about Functional Programming
//Important thing to know from challenge page

//Task

 
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];
  
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40); 

console.log(tea4TeamFCC);


//Understand functional programming technology
//Many Important things to know from challenge page


const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC =  getTea(prepareGreenTea , 27); // :(
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); // :(

// Add your code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);


//Understand the hazards of using imperative code
//There is no task in this challenge. It is just an example.


//Avoids mutations and side effets using functional programming.

// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  return fixedValue + 1;
  
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4

//Pass arguments to avoid external dependence in a function.

// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer (arg) {
  return arg + 1;
  
  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4

//Refactor global variables out of functions


var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (list, bookName) {
  let  newList = [...list];
   newList.push(bookName);
  return newList;
}
function remove (list, bookName) {
  let newList = [...list];
  if (newList.indexOf(bookName) >= 0) {
    newList.splice(newList.indexOf(bookName), 1);
    return newList;
  }
  return newList;
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(newBookList, 'On The Electrodynamics of Moving Bodies');

console.log(bookList);


//Use the map method to extract from an array


/**when I code this
 * var rating = [];

 rating = watchList.map((item) => item);
 * it returns the complete array. Here I found map mathod must take a parameter. without parameter map doesn't work.
 And when I return only the parameter the complete array returns. 
 */

var watchList = [
  {  
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
 },
 {  
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
 },
 {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
 },
 {  
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
 },
 {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
 }
];

var rating = [];


rating = watchList.map((item) => ({"title" : item["Title"], "imdbrating" : item["imdbRating"]}));

console.log(rating); 


/** The parenthesis around object means the full snippet to return
 * ({"title" : item["Title"], "imdbrating" : item["imdbRating"]}) 
 */


 // Implement map on a prototype

 // the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  for (let i = 0; i < this.length; i++){
    newArray.push(callback(this[i]));
  }
  // Add your code above this line
  return newArray;

};


 var new_s = s.myMap(function(item){
  return item * 2 ;
});
/**here I had a big confusion. This challenge is mainly defining a function in a upper level. 
 * Normally what we seardh in MDN or W3C for help and see there that functions are declared like 
 * Array.prototype.map and explained the functionality of that. In this challenge we have to define a function
 * name Array.prototype.myMap which will exactly work like Array.prototype.map. 
 * Second confusion was about callback function. So declaring this type of upper level function which takes a 
 * function as an argument we need to declare a callback function inside that myMap function. The word 'this' 
 * refers the instance of that callback argument(function).for ex. if we put function(item) as an argument 
 * to myMap and return item, myMap will work with the elements of item array as instructed in Array.prototype.myMap
 * function and then return a new copy of array, same as item.
 * I have found this functionality in map() function in a 2 steps earlier challenge.
 */



 //Use the filter method to extract data from an array

 // the global variable
var watchList = [
  {  
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
 },
 {  
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
 },
 {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
 },
 {  
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
 },
 {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
 }
];

// Add your code below this line

var filteredList = [];

filteredList = watchList.map(item => ({"title" : item["Title"], "rating" : item["imdbRating"]}))
                                          .filter(function(item){
                                            if( item.rating >= 8.0){
                                              return item;
                                            }
                                          })  // My solution.
                      


// Add your code above this line

console.log(filteredList); 

// Short form from hint
filteredList = watchList.map(item => ({"title" : item["Title"], "rating" : item["imdbRating"]})).filter(item => item.rating >= 8.0)

// my other almost same solution 

var rating = [];
 rating = watchList.map(function(x){
  return {title: x["Title"],  rating: x["imdbRating"]}
 })

 var filteredList = rating.filter(x => Number(x.rating) > 8.0);// x is every single object in the array
                                                               //so x.rating is simple object.property method 
console.log(filteredList); 
//another one

var rating = [];
 rating = watchList.map(function(x){
  return {title: x["Title"],  rating: x["imdbRating"]}}).filter(x => Number(x.rating) > 8.0);

console.log(rating); 




//IMPLEMENT THE FILTER METHOD ON A PROTOTYPE
//From hint

var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  for(var i = 0; i < this.length; i++){
    if ( callback(this[i]) === true){
      newArray.push(this[i]);
   }
  }

  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
// returns [23, 65, 5]

// For understanding
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  for(var i = 0; i < this.length; i++){
    if ( callback(this[i]) === true){
      newArray.push(callback(this[i]));
   }
  }

  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
// returns [true, true, true]


//RETURN PART OF AN ARRAY USING THE SLICE METHOD
//my solution

function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  var slicedArray = [];
  for(var i = beginSlice; i < endSlice; i++){
    slicedArray.push(anim[i]);    
  }
  return slicedArray; 
  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

//Everything is OK and all the return results are correct.But solution is not accepted for not using slice method. 
//Using slice method
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  var newArray =[];
   newArray = anim.slice(beginSlice, endSlice);
  
   return newArray;
  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

//REMOVE ELEMENT FROM AN ARRAY USING SLICE INSTEAD OF SPLICE

function nonMutatingSplice(cities) {
  // Add your code below this line
  var newCities = cities.slice(0,3);
  return newCities;
  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

//COMBINE TWO ARRAYS USING CONCAT METHOD

function nonMutatingConcat(original, attach) {
  // Add your code below this line
  return original.concat(attach);
  
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

//ADD ELEMENTS TO THE END OF AN ARRAY USING CONCAT INSTEAD OF PUSH
function nonMutatingPush(original, newItem) {
  // Add your code below this line
  return original.concat(newItem);
  
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

// a simple another way of concatenate
function nonMutatingConcat(original, attach) {return [...original,...attach]}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);


//USE THE REDUCE METHOD TO ANALYZE DATA

// the global variable
var watchList = [
  {  
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
 },
 {  
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
 },
 {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
 },
 {  
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
 },
 {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
 }
];

// Add your code below this line

var averageRating = watchList.filter(movie => movie.Director === "Christopher Nolan").map(movie => Number(movie.imdbRating)).reduce((x,y) => x + y) / watchList.filter(movie => (movie.Director) === "Christopher Nolan").length;

// Add your code above this line

console.log(averageRating); 

/** Here I knew about filter function. It can return elements only by passing conditions. We don't need to instruct it how to return elements. e.g. filter(movie => movie.Director === "Christopher Nolan") return all objects
 * that has the director christopher nolan. 
 * another thing is map(movie => Number(movie.imdbRating)) returns all imdbRating point inside movie array and 
 * Number function converts string to number.  
*/

//my solution
let filtered = watchList.filter(x => x.Director === "Christopher Nolan").map(x => Number(x.imdbRating))

var averageRating = filtered.reduce((x,y)=> x+y)/ filtered.length;

console.log(averageRating); 


//SORT AN ALPHABETICALLY USING SORT METHOD
//Fcc example with correct form 
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    if( a > b){      //When a > b , sorts array descending order and , a < b ascending order;
      return -1;     // returning 1 does not change any order whether it is a > b or a < b. 
    }
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);


function alphabeticalOrder(arr) {
  // Add your code below this line
   return arr.sort();
  };
  
  // Add your code above this line

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);



//RETURN A SORTED ARRAY WITHOUT CHANGING THE ORIGINAL ARRAY
//solution
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return arr.concat().sort();
  
  // Add your code above this line
}
nonMutatingSort(globalArray);

//my way

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
    let newArr = [...arr];
    return newArr.sort();
  // Add your code above this line
}
nonMutatingSort(globalArray);

//from hint

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
  // Add your code above this line
}
nonMutatingSort(globalArray);


//SPLIT A STRING INTO AN ARRAY USING THE SPLIT METHOD

function splitify(str) {
  // Add your code below this line
  return str.split(/\W/);
  
  // Add your code above this line
}
splitify("Hello World,I-am code");

//COMBINE AN ARRAY INTO A STRING USING THE JOIN METHOD

function sentensify(str) {
  // Add your code below this line
  return str.split(/\W/).join(" ");
  
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");

//APPLY FUNCTIONAL PROGRAMMING TO CONVERT STRINGS TO URL SLUGS

var globalTitle = "Winter Is Coming";

function urlSlug(title) {
 return title.toLowerCase().split(/\W+/).filter(x => x !== '').join('-');
  
}

var winterComing = urlSlug(globalTitle); 

//my another solution
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
 return  title.toLowerCase().split(/\W+/).filter(x => Boolean(x) === true).join('-');  
}
var winterComing = urlSlug(globalTitle); 


//USE THE EVERY METHOD TO CHECK EVERY ELEMENT IN AN ARRAY MEETS A CRITERIA

//example
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false

//Task
function checkPositive(arr) {
  // Add your code below this line
 return  arr.every(x => x > 0);
  
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);


//USE THE SOME METHOD TO CHECK ANY ELEMENT IN AN ARRAY MEETS THE CRITERIA
//example
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true

//task

function checkPositive(arr) {
  // Add your code below this line
  return arr.some(x => x > 0);
  
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);

//INTRODUCTION TO CURRYING AND PARTIAL APPLICATION
//example

//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
curried(1)(2) // Returns 3

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3


//task
function add(x) {
  // Add your code below this line
  return function(y){
    return function(z){
      return x + y + z;
    }
  }
  
  // Add your code above this line
}
add(10)(20)(30);