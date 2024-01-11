$("#shbutton").click(function () {
  window.location.href = "registration.html";
});


$(document).ready(function() {
 $("#submit").mousedown(function() {
   alert("thank you for contacting us");
 });
});


const gName = document.getElementById('name');
const gEmail = document.getElementById('email');
const gMessage = document.getElementById('message');
const submit = document.getElementById('submit');


submit.addEventListener("click", function(event) {
  checkEmpty(event, gName, gEmail, gMessage);
});

function checkEmpty(event, gName, gEmail, gMessage) {
  if (gName.value === "") {
    alert("Please enter Name");
    event.preventDefault();
  } else if (gEmail.value === "") {
    alert("Please enter your Email");
    event.preventDefault();
  } else if (gMessage.value === "") {
    alert("Please write a Message");
    event.preventDefault();
  } else {
    setTimeout(() => {
      callback1(greet);
    }, 2000);
    event.preventDefault();
  }
}





function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var email = document.getElementById('message').value;

  if (name == "" || email == "" || message == "") {
      alert("Please enter your name and email and message.");
      return false; 
  }else{

    return true;
  }

 
  
}



function fadeIn() {
  const thanknote = document.getElementById('thanknote');
  thanknote.style.display = 'block';
  thanknote.offsetWidth;
  thanknote.style.opacity = '1';
}



function validateForm() {
  var password = document.querySelector('#registrationForm input[type="password"]').value;
  var confirmPassword = document.querySelector('#registrationForm input[type="password"][placeholder="Confirm your password"]').value;

  if (password !== confirmPassword) {
      alert("Passwords do not match. Please confirm your password correctly.");
      return false;
  }


}


function changeParagraph() {
  var paragraph = document.getElementById('myParagraph');
  paragraph.innerHTML = "Deri ne 6 muaj falas";
  paragraph.onclick = null;
}



function ToggleVisibility() {
  var paragraph = document.getElementById('myParagraph');

  if (paragraph.style.display === 'none' || paragraph.style.display === '') {
      paragraph.style.display = 'block';
  } else {
      paragraph.style.display = 'none';
  }
}

function ToggleVisibility() {
  $('#myParagraph').toggle();
}