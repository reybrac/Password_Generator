var useNumbers = "";
var useLowerCase = "";
var useUpperCase = "";
var useSpecialChar = "";
// Assignment Code
var generateBtn = document.querySelector('#generate');

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Add event listener to generate button
generateBtn.addEventListener('click', () =>{
    
    var hasLower = (useLowerCase === true);
    var hasUpper = (useUpperCase === true);
    var hasNumber = (useNumbers === true);
    var hasSymbol = (useSpecialChar === true);

    var password = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

// Write password to the #password input
//function writePassword() {}


function generatePassword(lower, upper, number, symbol) {
    // prompt to ask about how many characters
    var pwlength = parseInt(prompt('How many chars?'));
    console.log(typeof pwlength);
    // prompt to ask about using numbers
    var useNumbers = confirm('Do you want to use numbers?');
    console.log('useNumbers: ', useNumbers);
    
    // prompt to ask about using lower case
    var useLowerCase = confirm('Do you want to use lower case?');
    console.log('useLowerCase: ',useLowerCase);
    
    // prompt to ask about using Upper case
    var useUpperCase = confirm('Do you want to use Upper case?');
    console.log('useUpperCase: ', useUpperCase);
    
    // prompt to ask about using Special character
    var useSpecialChar = confirm('Do you want to use special characters?');
    console.log('useSpecialChar: ' , useSpecialChar);

    var length = +pwlength.value;

    let generatedPassword = "";
    
    // var typesCount = lower + upper + number + symbol;

    // var typesArr = [{lower} + {upper} + {number} + {symbol}].filter
    // (item => Object.values(item)[0]);

    // console.log('typesArr: ', typesArr);

    // if(typesCount == 0){
    //     return 'what did you do?';
    // }
    for(let i=0; i < length; i += typesCount){
        // typesArr.forEach(type => {
        //     var funcName = Object.keys(type)[0];
        //     console.log('funcName: ' , funcName);

            generatedPassword = generatedPassword + randomFunc;
            console.log(generatedPassword);
        

        var finalPassword = (generatedPassword.slice(0, pwlength));
        var passwordText = document.querySelector('#password');
        passwordText.value = password;
        return "hello"; 
    };
      
    


    
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


