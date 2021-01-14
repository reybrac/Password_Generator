// Assignment Code
var generateBtn = document.querySelector('#generate');

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword(lower, upper, number, symbol) {
  // prompt to ask about how many characters
  var pwlength = parseInt(prompt('How many chars?'));
  console.log(typeof pwlength);
  console.log();

  // prompt to ask about using numbers
  var useNumbers = confirm('Do you want to use numbers?');
  console.log(useNumbers);
  
  // prompt to ask about using lower case
  var useLowerCase = confirm('Do you want to use lower case?');
  console.log(useLowerCase);
  
  // prompt to ask about using Upper case
  var useUpperCase = confirm('Do you want to use Upper case?');
  console.log(useUpperCase);

  // prompt to ask about using Upper case
  var useSpecialChar = confirm('Do you want to use special characters?');
  console.log(useSpecialChar);

  if(useNumbers === true && useSpecialChar === true && useSpecialChar === true && useUpperCase == true){
    randomFunc = lower + upper + number + symbol;
    return randomFunc;
  }else{
    var generatedPassword = lower + upper;
    return generatedPassword;
    }

  
}


//functions
function getRandomNumber() {
  var numbers = "1234567890";
  
  return numbers[Math.floor(Math.random()*numbers.length)];
}
function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>?,.";
  
  return symbols[Math.floor(Math.random()*symbols.length)];
}
function getRandomLower() {
  var symbols = "abcdefghijklmnopqrstuvwxyz";
  
  return symbols[Math.floor(Math.random()*symbols.length)];
}
function getRandomUpper() {
  var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  return symbols[Math.floor(Math.random()*symbols.length)];
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);