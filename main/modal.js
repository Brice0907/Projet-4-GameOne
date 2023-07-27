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
  const condition = document.querySelector('#checkbox1');

  let contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    condition: condition.checked,
  }

  if (regexTest(contact)) {
    form.style.display = 'none';
  }

});


// REGEX FORMULAIRE
function regexTest(contact) {

  form.querySelector('#firstNameErrorMsg').textContent = ''
  form.querySelector('#lastNameErrorMsg').textContent = ''
  form.querySelector('#emailErrorMsg').textContent = ''
  form.querySelector('#conditionErrorMsg').textContent = ''

  if (!/^[A-Za-z]+[ \-']?[[A-Za-z]+[ \-']?]*[a-z]+$/.test(contact.firstName)) {
    form.querySelector('#firstNameErrorMsg').textContent = "Veuillez renseigner correctement votre Prénom"
    return false
  } else if (!/^[A-Za-z]+[ \-']?[[A-Za-z]+[ \-']?]*[a-z]+$/.test(contact.lastName)) {
    form.querySelector('#lastNameErrorMsg').textContent = "Veuillez renseigner correctement votre Nom"
    return false
  } else if (!/^[a-zA-Z0-9.-_+]+@[a-zA-Z0-9.-_]+\.[a-z]{2,10}$/.test(contact.email)) {
    form.querySelector('#emailErrorMsg').textContent = "Veuillez renseigner correctement votre Email"
    return false
  } else if (!contact.condition) {
    form.querySelector('#conditionErrorMsg').textContent = "Vérifier que vous acceptez les termes et conditions"
    return false
  } else {
    return true
  }
}