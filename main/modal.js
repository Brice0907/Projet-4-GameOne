function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelector('.close');
const submit = document.querySelector('.btn-submit');
const form = document.querySelector('.form');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeForm.addEventListener('click', closing);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
function closing() {
  modalbg.style.display = "none";
}

// Vérif form
form.addEventListener('submit', async (e) => {

  e.preventDefault();
  const firstName = document.querySelector('#first');
  const lastName = document.querySelector('#last');
  const email = document.querySelector('#email');

  let contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  }

  if (regexTest(contact)) {
    console.log("c'est good");
  }

});


// REGEX FORMULAIRE
function regexTest(contact) {
  if (!/^[A-Za-z]+[ \-']?[[A-Za-z]+[ \-']?]*[a-z]+$/.test(contact.firstName)) {
    console.log("erreur dans le form FIRSTNAME");
    return false
  } else if (!/^[A-Za-z]+[ \-']?[[A-Za-z]+[ \-']?]*[a-z]+$/.test(contact.lastName)) {
    console.log("erreur dans le form LASTNAME");
    return false
  } else if (!/^[a-zA-Z0-9.-_+]+@[a-zA-Z0-9.-_]+\.[a-z]{2,10}$/.test(contact.email)) {
    console.log("erreur dans le form EMAIL");
    return false
  } else {
    return true
  }
}