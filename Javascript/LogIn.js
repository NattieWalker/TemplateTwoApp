


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