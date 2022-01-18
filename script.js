function response()
{  
  // declare variable to store mobile no and alerts
  var number = document.getElementById("Mobile number").value;
  var danger ="<div class='alert alert-danger'> <button class='close btn' data-dismiss='alert'>X</button> <strong>Invalid Number!</strong> Please try again.</div>"
  var success ="<div class='alert alert-success'> <button class='close btn' data-dismiss='alert'>X</button> <strong>Congratulations!</strong> Registration is successful</div>"
// if-else logic start here  
  if (number.length !=10||isNaN(number)){
  document.getElementById("alert-code").innerHTML=danger;
  } else
{ 
 document.getElementById("alert-code").innerHTML= success;
 }

}