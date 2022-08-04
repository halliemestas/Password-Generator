// Assignment code starts here
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
  

}


// Get references to the #generate & #submit element
//Generate Button now needs to generate pop up form for requirements rather than inital run to writePassword, submit for form now needs to writePassword
var generateBtn = document.querySelector("#generate");
var submitBtn = document.querySelector("#submit");

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  closeForm();

  passwordText.value = password;
}

// Add event listener to generate button to open form instead of writePassword
submitBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", openForm);