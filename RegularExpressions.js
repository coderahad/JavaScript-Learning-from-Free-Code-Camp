//Using the test method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

//Match literal strings
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
// Returns true
//Any other forms of "Kevin" will not match. For example, the regex /Kevin/ will not match "kevin" or "KEVIN".

let wrongRegex = /kevin/;
wrongRegex.test(testStr);
// Returns false

// Match a literal string with different possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

//Ignore case while matching

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

//Extract Matches
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]

//Find more than the first match
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// Returns ["Repeat"]
//To search or extract a pattern more than once, you can use the g flag.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]

//Task on it

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

//Match anything with wildcard period

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

//Match single character with multiple possibilities

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

//task of it

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

// one more 
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /tr[aeiou][aeiou]d/gi; 
let result = quoteSample.match(vowelRegex); // returns "tried";

//Match letters of the alphabet

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

//Task

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

// Match numbers and letters of the alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//Match single charecters not specified

let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
/*To create a negated character set, you place a caret character (^) after the opening bracket 
and before the characters you do not want to match.
For example, /[^aeiou]/gi matches all characters that are not a vowel.
Note that characters like ., !, [, @, / and white space are 
matched - the negated vowel character set only excludes the vowel characters.
*/ 
// Match charecters that occur one or more times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

//Match charaters that occur 0 or more times

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

// Find characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex); //This solution is self-made and not given properly in FCC:Get hint page.

//Find one or more criminals in a hunt
// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; // Change this line
//let reCriminals = /CC*/; produce the same result
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

//Match beginning string pattern
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false
//task
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

//Match ending string patterns
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false
//Use shorthand to match letters and numbers


let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames);// Returns true
varNames.match (shortHand); // Returns 

//task
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w+/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

//Match everything but letters and numbers

let shortHand = /\W/;  // everything including white space.
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]

//Match Only numbers

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;

//Match all non-numbers

let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;

//Restrict possible usernames

let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i; // Change this line
let result = userCheck.test(username);

//Match whitespaces

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
/*You can search for whitespace using \s, which is a lowercase s.
This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. 
You can think of it as similar to the character class [ \r\t\f\n\v].
*/

//Match non-white space characters
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
//You can think of it being similar to the character class [^ \r\t\f\n\v].

//Specify upper and lower number of matches

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

//task Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
let result = ohRegex.test(ohStr);

//specify only the lower number of matches

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true

//Specify exact number of matches
//to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/.
//hange the regex timRegex to match the word "Timber" only when it has four letter m's.
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

//Check for all or none
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
//You can think of this symbol as saying the previous element is optional.

// Positive and Negative look ahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=(?:\D*\d){2})/; // Change this line
let result = pwRegex.test(sampleWord);
/*pwRegex.test("abc12e3");
true
pwRegex.test("abc1e23");
true
pwRegex.test("abc1e2f3");
true
pwRegex.test("abc123");
true
*/
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
/*pwRegex.test("abc123");
true
pwRegex.test("abc1e2f3");
false
pwRegex.test("abc1e23");
false
pwRegex.test("abc12e3");
true*/

//Reuse Pattern using capture groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\2\1$/; // Change this line
let result = repeatNum.match(reRegex);

// Use capture groups to search and replace
let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);

//Remove white spaces from start and end

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex,""); // Change this line