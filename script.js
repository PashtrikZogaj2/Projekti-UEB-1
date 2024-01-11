$("#shbutton").click(function () {
  window.location.href = "registration.html";
});

/*
$(document).ready(function() {
 $(".btn1").mousedown(function() {
   alert("thank you for contacting us");
 });
});*/


function checkEmpty(gName, gEmail, gMessage) {
  if(gName.value == "") {
    alert("please enter Name");
    event.preventDefault();
  } else {
    if(gEmail.value == "") {
      alert("Please enter your Email");
      event.preventDefault();
    } else {
      if (gMessage .value == "") {
        alert("Please write a Message");
        event.preventDefault();
      }else {
        setTimeout( () => {
         callback1(greet);
        }, 2000);
        event.preventDefault();
      }
    }
  }
}


function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var email = document.getElementById('message').value;

  if (name == "" || email == "" || message == "") {
      alert("Please enter your name and email and message.");
      return false; 
  }

 
  return true;
}




function fadeNote() {
  $('#thanknote').fadeIn(3000);
}
