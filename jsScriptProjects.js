//JavaScript Algorithms and Data Structures Projects: Palindrome Checker

//my solution
function palindrome(str) {
    let strArr = str.split(/\W+|_/);
    strArr = strArr.join(" ");
    strArr = strArr.toLowerCase().split('');
    for(let i = 0; i < strArr.length; i++){
      if(strArr[i] === " "){
        delete strArr[i];
      }
    }
    strArr = strArr.filter(x=>x);
    let count = 0;
    for(let j = 0; j < strArr.length; j++) {
      if(strArr[j] !== strArr[strArr.length - 1 -j]) {
         count++;
      }  
    }
    if(count > 0){
      return false;
    }else{
    return true;
    }
  }
  
  palindrome("eye");

  //Some other solutions are in hint

  //JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter

  
  function convertToRoman(num) {

    let decimalNumeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    
    let romanized = "";
    
    for(let i = 0; i < decimalNumeral.length; i++){
      while(decimalNumeral[i] <= num){
        romanized += romanNumeral[i];
        num -= decimalNumeral[i];
      }
    }
    
    return romanized;
    }
    convertToRoman(36); 


    //JavaScript Algorithms and Data Structures Projects: Caesars Cipher
    //my solution
    
    function rot13(str) { 
      let alphabetArr = ['A' , 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
       str = str.split('');
       for(let i = 0; i < str.length; i++){
      
      let strIndex = alphabetArr.indexOf(str[i]);
      if(strIndex < 0){
        str[i];
      }
      else if(strIndex < 13){
      str[i] = alphabetArr[(alphabetArr.length + strIndex)- 13];
      } else {
        str[i] = alphabetArr[strIndex- 13];
      }
     } 
      return str.join('');
    }
    
    
    rot13("SERR PBQR PNZC");

    //JavaScript Algorithms and Data Structures Projects: Us Telephone Number Validator

    function telephoneCheck(str) {
      let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
      return regex.test(str);
    }
    
    telephoneCheck("555-555-5555");

    //JavaScript Algorithms and Data Structures Projects: Cash Register

    //my incomplete solution 
    let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 800]];
    let baseArr = [.01, .05, .1, .25, 1, 5, 10, 20, 100];
    let cashNoteArr = [];
   for(let i = 0; i < baseArr.length; i++){
       cashNoteArr.push(Math.round(cid[i][1] / baseArr[i]));
   }
    let change = [];
    let newChangeArr = [];
    let due = 545;
    let result;
    let remain;
    for(let j = baseArr.length; j >= 0; j--){
       result = Math.floor( due / baseArr[j]);
       remain = due % baseArr[j];
    if(result >= 1 && cashNoteArr[j] >= result){
        cashNoteArr[j] = cashNoteArr[j] - result;
        newChangeArr = [cid[j][0], result * baseArr[j]];
        change.push(newChangeArr);
        due = remain;
     }
    }


    //solution from hint
    
var denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;

  var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1]; // changing totals previous value
    acc[curr[0]] = curr[1];// declare a new property and value
    return acc;
  }, { total: 0 });


  if (register.total === change) {
    output.status = 'CLOSED';
    output.change = cid;
    return output;
  }


  if (register.total < change) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
      
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      change = Math.round(change * 100) / 100;
    }

    if (value > 0) {
        acc.push([ curr.name, value ]);
    }
    return acc; 
  }, []); 

  if (change_arr.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  output.status = 'OPEN';
  output.change = change_arr;
  return output;
}


checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);




    