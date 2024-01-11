$("#shbutton").click(function () {
  window.location.href = "registration.html";
});


$(document).ready(function() {
 $(".btn1").mousedown(function() {
   alert("thank you for contacting us");
 });
});


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

function greet(name) {
  alert(`Thank you for contacting us ${name}`);
}
function callback1(callback) {
  const name = document.getElementById('nameForm').value;
  callback(name)
}




function fadeNote() {
  $('#thanknote').fadeIn(3000);
}
