//array lowercase characters
var lowerCasedCharacters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

//array specialcharacters
var specialCharacters = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", 
  "`", "|", "}", "{", "[", "]", ":", ";", "?", ">", "<", ",", ".", 
  "/", "-", "="
];

//array Uppercase characters
var upperCasedCharacters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

// array numbers
var numberCharacters = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// If the characters are less than 8 or more than 128, you need to start all over
// var hasSpecialCharacters  prompt, do you want special characters
// prompt, do you want numbers

function userChoices(){
  // prompt How many characters would you like your password to contain
  // Can't have less than 8 or more than 128
  var pwLength = parseInt(prompt(
    "How many characters would you like your password, pick a number between 8 and 128"
  ));

  if (Number.isNaN(pwLength)) {
    alert("password length is required");
    return;
  }
  if (pwLength < 8) {
    alert("Password length must be at least 8 characters");
  }
  if (pwLength > 128) {
    alert("Password length can't be more than 128 characters");
  }
  var incSpecialCharacters = confirm("Click ok to include special characters as part of your password!");

  var incNumbers = confirm("Click ok to include numbers as part of your password!");

  var incLowerCase = confirm("Click ok to include lower case characters as part of your password!");

  var incUpperCase = confirm("Click ok to include uppercase characters as part of your password!");

  if (!incSpecialCharacters && !incNumbers && !incLowerCase && !incUpperCase) {
    alert("Please select at least one character type");
    return;
  }

  var choices = {
    length: pwLength,
    incSpecialCharacters: incSpecialCharacters,
    incNumbers: incNumbers,
    incLowerCase: incLowerCase,
    incUpperCase: incUpperCase,
  };
  
  return choices;
};

function getRandomChar(array) {
    return array[Math.floor(Math.random() * array.length)];
  
};

function generatePassword() {
  // guarantee at least one of each character that is selected for the password option
  
  var choices = userChoices();

  var password = [];
  var allCharacters = [];
  var chosenCharacters = [];

  // For every character type selected, need to concat the existing character arrays into the possible characters array.
  if (choices.incSpecialCharacters) {
    allCharacters = allCharacters.concat(specialCharacters);
    chosenCharacters.push(getRandomChar(specialCharacters));
  }

  if (choices.incNumbers) {
    allCharacters = allCharacters.concat(numberCharacters);
    chosenCharacters.push(getRandomChar(numberCharacters));
  }

  if (choices.incLowerCase) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
    chosenCharacters.push(getRandomChar(lowerCasedCharacters));
  }

  if (choices.incUpperCase) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
    chosenCharacters.push(getRandomChar(upperCasedCharacters));
  }

  
  //Array method that will merge all the elements of an array.
  for (var i = 0; i < choices.length; i++) {
    var characterResult = getRandomChar(allCharacters);
    password.push(characterResult);
  } 
  console.log(password);
  return password.join('');
  
};

// Assignment Code
var generateButton = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);
console.log(writePassword);

