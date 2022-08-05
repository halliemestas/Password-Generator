function openForm() 
{
  document.getElementById("popup").style.display = "block";
}

function closeForm() 
{
  document.getElementById("popup").style.display = "none";
}

function generatePassword()
{
  //setting values
  var passLength = document.getElementById('plength').value;
  var l = document.getElementById('lower').checked; 
  var n = document.getElementById('num').checked;
  var u = document.getElementById('upper').checked;
  var s = document.getElementById('special').checked;

  //confirmation elements received by form
  console.log(passLength);
  console.log(l);
  console.log(u);
  console.log(n);
  console.log(s);

  //creating arrays for possible characters
  var lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var spec = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];

  if (l) {
    possibleCharacters = possibleCharacters.concat(lowerAlpha);
  }
  if (u) {
    possibleCharacters = possibleCharacters.concat(upperAlpha);
  }
  if (n) {
    possibleCharacters = possibleCharacters.concat(num);
  }
  if (s) {
    possibleCharacters = possibleCharacters.concat(spec);
  }

  //confirmation Array was actually receiving characters based on input
  possibleCharacters.forEach(function(element, index) {
    console.log(element, index);
  });

  var newPass = "";
  for(var i=0; i < passLength; i++)
  {
    var char = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];

    newPass += char;
  }
  
  //confirmation that newPass getting random characters
  console.log(newPass);

  //should be returning properly
  return newPass;
}


// Get references to the #generate & #submit element
//Generate Button now needs to generate pop up form for requirements rather than inital run to writePassword, submit for form now needs to writePassword
var generateBtn = document.querySelector("#generate");
var submitBtn = document.querySelector("#submit");

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();

  //confirming generate password pulling through correctly (it is)
  console.log(password);

  var passwordText = document.querySelector("#password");
  // closeForm();

  passwordText.value = password;

  //The functions are working, but can't seem to get anything to display in the password box given by the cloned code, used an alert to display instead.
  alert("This is your generated password: " + password);
}

// Add event listener to generate button to open form instead of writePassword
generateBtn.addEventListener("click", openForm);

submitBtn.addEventListener("click", writePassword);

submitBtn.addEventListener("click", closeForm);