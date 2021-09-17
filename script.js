// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// password variables
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specialK = ['!', '@', '#','$','%','^','&','*','(', ')', '-','_','=','+']

// define password length
var passwordLength = window.prompt('How many characters would you like for you password?');


//options randomly
var index1 = Math.floor(Math.random() * lowerCase.length);

var computerChoice1 = lowerCase[index1];

var index2 = Math.floor(Math.random() * upperCase.length);

var computerChoice2 = upperCase[index2];

var index3 = Math.floor(Math.random() * numbers.length);

var computerChoice3 = numbers[index3];

var index4 = Math.floor(Math.random() * specialK.length);

var computerChoice4 = specialK[index4];


//function for generating password

function generatePassword(lowerCase, upperCase, numbers, specialK) {
    if (passwordLength) {
        
    } else if (passwordLength < 8 || passwordLength > 128) {
        window.alert('Error: please select a length between 8 and 128');
    } else if ()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
