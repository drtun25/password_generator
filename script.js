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

var yes = "yes";
var no = "no";



//function for generating password

function generatePassword()  {


//options randomly
var index1 = Math.floor(Math.random() * lowerCase.length);

var computerChoice1 = lowerCase[index1];

var index2 = Math.floor(Math.random() * upperCase.length);

var computerChoice2 = upperCase[index2];

var index3 = Math.floor(Math.random() * numbers.length);

var computerChoice3 = numbers[index3];

var index4 = Math.floor(Math.random() * specialK.length);

var computerChoice4 = specialK[index4];

//userChoice
var userChoice1 = window.prompt("Would you like letters?");

if (userChoice1 === yes) {
    computerChoice1();
    computerChoice2();
} else (userChoice1  === no); {
    window.alert("ok no problem")
}

var userChoice2 = window.prompt("Would you like numbers?");

if (userChoice2 === yes) {
    computerChoice3();

} else (userChoice2 === no); {
    window.alert("ok no problem");
}

var userChoice3 = window.prompt("Would you like special characters?");

if (userChoice3 === yes) {
    computerChoice4();
} else (userChoice === no); {
    window.alert("ok no problem");
}

window.alert("Your password is" + userChoice1 + userChoice2 + userChoice3);


}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
