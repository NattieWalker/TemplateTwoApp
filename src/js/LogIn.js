
//my code below. Only alert message worked
/*
function checkPassword(){
if(x == 2016) {
   //load index2.html
   function redirect(){
    var url = "index2.html";
    window.location(url);
    }
 }
 else if (x.length !== 4){
   alert("Please enter 4-digit password");
 }
else {
     alert("Please enter correct password.");
   }
}

var x = document.getElementById('password').value;
var elSubmit = document.getElementById('submit');
    elSubmit.addEventListener('onCLick', checkPassword, false);
*/

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "RRC" && password == "RRC2016"){
window.location = "src/HTML/index2.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}