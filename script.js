// Assignment Code
var generateBtn = document.querySelector('#generate');
var symbols = "!@#$%^&*(){}[]=<>?,.";
var numbers = "1234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

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
        var confirmNumber =confirm("Will this contain numbers?");
            if(confirmNumber == true){
                alert("You selected yes to numbers");
            }
        var confirmLowerCase =confirm("Will this contain lower case letters?");
            if(confirmLowerCase == true){
                alert("You selected yes to lower case letters");
            }
        var confirmUpperCase =confirm("Will this contain Upper case letters?");
            if(confirmUpperCase == true){
                alert("You selected yes to Upper case letters");
            }
        var confirmSymbols =confirm("Will this contain symbols?");
            if(confirmSymbols == true){
                alert("You selected yes to Symbols");
            }
    }   
    var typesCount = confirmNumber + confirmLowerCase + confirmUpperCase + confirmSymbols;
        console.log('typesCount: ' , typesCount);
        console.log(confirmNumber, confirmLowerCase, confirmUpperCase, confirmSymbols);
      
    if(typesCount === 0){
        alert ("please select at least one type of character");
    
    }else{
    // if(confirmNumber == true && confirmLowerCase == true && confirmUpperCase == true && confirmSymbols == true){
    //     var chars = numbers + lowerCase + upperCase + symbols ;
    //     var pass = "";
    //     for (var x = 0; x < pwlength; x++) {
    //         var i = Math.floor(Math.random() * chars.length);
    //         pass += chars.charAt(i);
    //     }
    // }else if(confirmNumber == true && confirmLowerCase == true && confirmUpperCase == true && confirmSymbols == false){
    //     var chars = numbers + lowerCase + upperCase ;
    //     var pass = "";
    //     for (var x = 0; x < pwlength; x++) {
    //         var i = Math.floor(Math.random() * chars.length);
    //         pass += chars.charAt(i);       
    //     }
    //  } else if(confirmNumber == true && confirmLowerCase == true && confirmUpperCase == false && confirmSymbols == false){
    //     var chars = numbers + lowerCase;
    //     var pass = "";
    //     for (var x = 0; x < pwlength; x++) {
    //         var i = Math.floor(Math.random() * chars.length);
    //         pass += chars.charAt(i);       
    //     }
    //  } else {
        //while(confirmLowerCase == true || confirmNumber == true || confirmSymbols == true || confirmUpperCase == true){
        if(confirmUpperCase == true){
            confirmUpperCase = upperCase;
        }else{
            confirmUpperCase = "";
        }
        if(confirmLowerCase == true){
            confirmLowerCase = lowerCase;
        }else{
            confirmLowerCase = "";
        }
        if(confirmSymbols == true){
            confirmSymbols = symbols;
        }else{
            confirmSymbols = "";
        }
        if(confirmNumber == true){
            confirmNumber = numbers;
        }else{
            confirmNumber = "";
        }
        var chars = confirmNumber + confirmLowerCase + confirmUpperCase + confirmSymbols;
        console.log('chars: ', chars);

        var pass = "";
        for (var x = 0; x < pwlength; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
        }
               
        }
    //}
        console.log(pass);
        return pass;
      
    
}




