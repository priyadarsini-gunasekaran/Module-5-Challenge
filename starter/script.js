// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// User defined functions to present a series of prompts for password criteria
function getPrompt01() {
  var passLength = 0;
  for (var i = 0; i < 1; i++) {
    var x = Number(prompt("How many characters will your password be? Enter a number between 10 and 64"));
    if (x >= 10 && x <= 64){
      passLength += x;
      }
    else{
      alert("You have entered a wrong option. Lets try again");
      i--;
      continue;
    }
    //return console.log(passLength);
    return passLength;
  }
}

function getPrompt02() {
  var passLowerCase = false;
  for (var i = 0; i < 1; i++) {
    var x = prompt("Do you wish to have lowercase in your password? Enter 'y' or 'n'");
    if (x === 'y' || x === 'Y'){
      passLowerCase = true;
      } 
    else if (x === 'n' || x === 'N'){
      passLowerCase = false;
    }
    else{
      alert("You have entered a wrong option. Lets try again");
      i--;
      continue;
    }
       //return console.log(passLowerCase);
       return passLowerCase;
      }
    }
    function getPrompt03() {
      var passUpperCase = false;
      for (var i = 0; i < 1; i++) {
        var x = prompt("Do you wish to have uppercase in your password? Enter 'y' or 'n'");
        if (x === 'y' || x === 'Y'){
          passUpperCase = true;
          }
        else if (x === 'n' || x === 'N'){
          passUpperCase = false;
          }
        else{
          alert("You have entered a wrong option. Lets try again");
          i--;
          continue;
        }
        //return console.log(passUpperCase);
        return passUpperCase;
      }
    }
    function getPrompt04() {
      var passNumeric = false;
      for (var i = 0; i < 1; i++) {
        var x = prompt("Do you wish to have numeric values in your password? Enter 'y' or 'n'");
        if (x === 'y' || x === 'Y'){
          passNumeric = true;
          }
        else if (x === 'n' || x === 'N'){
          passNumeric = false;
          }
        else{
          alert("You have entered a wrong option. Lets try again");
          i--;
          continue;
        }
        //return console.log(passNumeric);
        return passNumeric;
      }
    }
    function getPrompt05() {
      var passSpecialChar = false;
      for (var i = 0; i < 1; i++) {
        var x = prompt("Do you wish to have special characters in your password? Enter 'y' or 'n'");
        if (x === 'y' || x === 'Y'){
          passSpecialChar = true;
          }
        else if (x === 'n' || x === 'N'){
          passSpecialChar = false;
          }
        else{
          alert("You have entered a wrong option. Lets try again");
          i--;
          continue;
        }
        //return console.log(passSpecialChar);
        return passSpecialChar;
      }
    }
      
    
    
// Function to prompt user for password options
function getPasswordOptions() {
  // prompt01 - Length of password (min 10 & max 64)
  var passLength = getPrompt01();

  // prompt02 - charcter type: lowercase
  var passLowerCase = getPrompt02();

  // prompt03 - charcter type: uppercase
  var passUpperCase = getPrompt03();

  // prompt04 - charcter type: numeric
  var passNumeric = getPrompt04();

  // prompt05 - charcter type: special characters
  var specialCharacters = getPrompt05();

  const finalPassword = generatePassword(passLength, passLowerCase, passUpperCase, passNumeric, specialCharacters);
  writePassword(finalPassword);
  
  }

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword(passLength, passLowerCase, passUpperCase, passNumeric, passSpecialChar) {
  let generatedPassword = "";
  for (let i = 0; i < passLength; i++) {
    if(passLowerCase){
      generatedPassword += getRandom(lowerCasedCharacters);
    }
    if (passUpperCase){
      generatedPassword += getRandom(upperCasedCharacters);
    }
    if (passNumeric){
      generatedPassword += getRandom(numericCharacters);
    }
    if(passSpecialChar){
      generatedPassword += getRandom(specialCharacters);
    }

  }

  const finalPassword = generatedPassword.slice(0, passLength);
  return finalPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);