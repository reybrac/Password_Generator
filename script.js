// Assignment Code
var generateBtn = document.querySelector('#generate');
var symbols = "!@#$%^&*(){}[]=<>?,.";
var numbers = "1234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var confirmNumber;
var confirmLowerCase;
var confirmUpperCase;
var confirmSymbols;

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
  
}

function generatePassword() {
    var pwlength = parseInt(prompt('How many chars?'));
    console.log(typeof pwlength);
    console.log();
    //checks that the value entered is valid. Not blank and not a letter
    if(!pwlength){
        alert("Please enter a valid value");
    //check that the number entered is between 8 and 128
    }else if(pwlength <8 || pwlength > 128){
        alert ("Password length needs to be between 8 and 128 characters");
    //generates the random password
    }else{
        confirmNumber =confirm("Will this contain numbers?");
        confirmLowerCase =confirm("Will this contain lower case letters?");
        confirmUpperCase =confirm("Will this contain Upper case letters?");
        confirmSymbols =confirm("Will this contain symbols?");
    }   
    var typesCount = confirmNumber + confirmLowerCase + confirmUpperCase + confirmSymbols;
        console.log('typesCount: ' , typesCount);
        
    if(typesCount === 0){
        alert ("please select at least one type of character");
    }else{

        

        var typesArr = [confirmNumber + confirmLowerCase + confirmUpperCase + confirmSymbols];
        console.log('typesArr: ', typesArr);

        console.log(confirmNumber, confirmLowerCase, confirmUpperCase, confirmSymbols);
        var chars = symbols + numbers + lowerCase + upperCase;
        var pass = "";
        for (var x = 0; x < pwlength; x++) {
            var i = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(i);
        }
        console.log(pass);
        return pass;
    }  
    
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);




// var useNumbers = "";
// var useLowerCase = "";
// var useUpperCase = "";
// var useSpecialChar = "";
// // Assignment Code
// var generateBtn = document.querySelector('#generate');

// var randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// };

// // Add event listener to generate button
// generateBtn.addEventListener('click', () =>{
    
//     var hasLower = (useLowerCase === true);
//     var hasUpper = (useUpperCase === true);
//     var hasNumber = (useNumbers === true);
//     var hasSymbol = (useSpecialChar === true);

//     var password = generatePassword(
//         hasLower,
//         hasUpper,
//         hasNumber,
//         hasSymbol,
//         length
//     );
// });

// // Write password to the #password input
// //function writePassword() {}


// function generatePassword(lower, upper, number, symbol) {
//     // prompt to ask about how many characters
//     var pwlength = parseInt(prompt('How many chars?'));
//     console.log(typeof pwlength);
//     // prompt to ask about using numbers
//     var useNumbers = confirm('Do you want to use numbers?');
//     console.log('useNumbers: ', useNumbers);
    
//     // prompt to ask about using lower case
//     var useLowerCase = confirm('Do you want to use lower case?');
//     console.log('useLowerCase: ',useLowerCase);
    
//     // prompt to ask about using Upper case
//     var useUpperCase = confirm('Do you want to use Upper case?');
//     console.log('useUpperCase: ', useUpperCase);
    
//     // prompt to ask about using Special character
//     var useSpecialChar = confirm('Do you want to use special characters?');
//     console.log('useSpecialChar: ' , useSpecialChar);

//     var length = +pwlength.value;

//     let generatedPassword = "";
    
//     var typesCount = lower + upper + number + symbol;

//     var typesArr = [{lower} + {upper} + {number} + {symbol}].filter
//     (item => Object.values(item)[0]);

//     console.log('typesArr: ', typesArr);

//     if(typesCount == 0){
//         return 'what did you do?';
//     }
//     for(let i=0; i < length; i += typesCount){
//         typesArr.forEach(type => {
//             var funcName = Object.keys(type)[0];
//             console.log('funcName: ' , funcName);

//             generatedPassword = generatedPassword + randomFunc;
//             console.log(generatedPassword);
        

//         var finalPassword = (generatedPassword.slice(0, pwlength));
//         var passwordText = document.querySelector('#password');
//         passwordText.value = password;
//         return "hello"; 
//         });
//     }
      
    


    
// }


// //functions
// function getRandomNumber() {
//   var numbers = "1234567890";
  
//   return numbers[Math.floor(Math.random()*numbers.length)];
// }
// function getRandomSymbol() {
//   var symbols = "!@#$%^&*(){}[]=<>?,.";
  
//   return symbols[Math.floor(Math.random()*symbols.length)];
// }
// function getRandomLower() {
//   var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  
//   return lowerCase[Math.floor(Math.random()*lowerCase.length)];
// }
// function getRandomUpper() {
//   var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
//   return upperCase[Math.floor(Math.random()*upperCase.length)];
// }