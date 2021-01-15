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
    var hasLower = (useLowerCase = true);
    var hasUpper = (useUpperCase = true);
    var hasNumber = (useNumbers = true);
    var hasSymbol = (useSpecialChar = true);
    var password = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol
    );
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

function generatePassword(lower, upper, number, symbol) {
    // prompt to ask about how many characters
    var pwlength = parseInt(prompt('How many chars?'));
    console.log(typeof pwlength);
    console.log();

    let generatedPassword = "";
    
    var typesCount = lower + upper + number + symbol;

    var typesArr = [{lower} + {upper} + {number} + {symbol}].filter(item => Object.values(item)[0]);

    console.log('tyesArr: ', typesArr);

    if(typesCount === 0){
        return 'what did you do?';
    }
    for(let i=0; i < pwlength; i += typesCount){
        typesArr.forEach(type =>{
            var funcName = Object.keys(type)[0];
            console.log('funcName: ' , funcName);

            generatedPassword = generatedPassword + randomFunc[funcName]();
        });
    }
      
    var finalPassword = (generatedPassword.slice(0, pwlength));
    return "good";
    console.log(generatedPassword.slice(0, pwlength));
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
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  
  return lowerCase[Math.floor(Math.random()*lowerCase.length)];
}
function getRandomUpper() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  return upperCase[Math.floor(Math.random()*upperCase.length)];
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);