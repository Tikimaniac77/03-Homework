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

​function getChoices() {
  // prompt How many characters would you like your password to contain
  // Can't have less than 8 or more than 128
  var passwordLength = parseInt(prompt(
    "How many characters would you like your password, pick a number between 8 and 128"
  ), 10);

  if (Number.isNaN(passwordLength)) {
    alert("password length is required");
    return;
  }
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
  }
  if (passwordLength > 128) {
    alert("Password length can't be more than 128 characters");
  }
​  var isSpecialCharacters = confirm("Click ok to include special characters as part of your password!");

  var isNumbers = confirm("Click ok to include numbers as part of your password!");

  var isLowerCase = confirm("Click ok to include lower case characters as part of your password!");

  var isUpperCase = confirm("Click ok to include uppercase characters as part of your password!");

  if (!hasSpecialCharacters && !hasNumbers && !hasLowerCase && !hasUpperCase) {
    alert("Please select at least one character type");
    return;
  }

​  var choices = {
    length: passwordLength,
    hasSpecialCharacters: isSpecialCharacters,
    hasNumbers: isNumbers,
    hasLowerCase: isLowerCase,
    hasUpperCase: isUpperCase,
  };
​  
  return choices;
};
​
function getRandomChar(array) {
    return array[Math.floor(Math.random() * array.length)];
  
};
​
function generatePassword() {
  // guarantee at least one of each character that is selected for the password option
  //  need an array for the final password
  //  need an array for the guarantee characters
  //  need an array for the possible characters
  var choices = getChoices();
​
  var password = [];
  var possibleCharacters = [];
  var guaranteeCharacters = [];
​
  // For every character type selected, need to concat the existing character arrays into the possible characters array.
  if (choices.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteeCharacters.push(getRandomChar(specialCharacters));
  }

  if (choices.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numberCharacters);
    guaranteeCharacters.push(getRandomChar(numberCharacters));
  }

  if (choices.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteeCharacters.push(getRandomChar(lowerCasedCharacters));
  }

  if (choices.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteeCharacters.push(getRandomChar(upperCasedCharacters));
  }

  password.concat(guaranteeCharacters);
  //Array method that will merge all the elements of an array.
  for (var i = 0; i < choices.length - guaranteeCharacters.length; i++) {
    var characterResult = getRandomChar(possibleCharacters);
    password.push(characterResult);
  } 
  return password.join('')

};
​
// Assignment Code
var generateButton = document.querySelector("#generate");
​
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
​
  passwordText.value = password;
};
​
// Add event listener to generate button
generateButton.addEventListener("click", writePassword);
console.log(writePassword);
