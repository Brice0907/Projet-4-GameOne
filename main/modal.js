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
const btnConfirmation = document.querySelector('.confirmation_bloc');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Event au click
closeForm.addEventListener('click', closing);
btnConfirmation.addEventListener('click', closing);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Function de fermeture du pop-up
function closing() {
  modalbg.style.display = "none";
}

// Formulaire de vérification
form.addEventListener('submit', async (e) => {

  // On annule l'action de base du formulaire
  e.preventDefault();

  // On récupère les champs du formulaire
  const firstName = document.querySelector('#first');
  const lastName = document.querySelector('#last');
  const email = document.querySelector('#email');
  const condition = document.querySelector('#checkbox1');

  // On stock nos données dans un objet contact
  let contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    condition: condition.checked,
  }

  // Si on obtient True c'est que les données sont correcte
  if (regexTest(contact)) {
    form.style.display = 'none';
    btnConfirmation.style.display = 'block';
  }
});


// REGEX FORMULAIRE
function regexTest(contact) {

  // On récupère le champs pour les messages d'erreur
  form.querySelector('#firstNameErrorMsg').textContent = ''
  form.querySelector('#lastNameErrorMsg').textContent = ''
  form.querySelector('#emailErrorMsg').textContent = ''
  form.querySelector('#conditionErrorMsg').textContent = ''

  // On filtre les données puis si elles sont incorrectes on affiche un message d'erreur et met l'input en rouge
  if (!/^[A-Za-z]+[ \-']?[[A-Za-z]+[ \-']?]*[a-z]+$/.test(contact.firstName)) {
    form.querySelector('#firstNameErrorMsg').textContent = "Veuillez renseigner correctement votre Prénom"
    document.querySelector('#first').classList.add('border-red');
    return false
  } else {
    document.querySelector('#first').classList.remove('border-red');
  }

  if (!/^[A-Za-z]+[ \-']?[[A-Za-z]+[ \-']?]*[a-z]+$/.test(contact.lastName)) {
    form.querySelector('#lastNameErrorMsg').textContent = "Veuillez renseigner correctement votre Nom"
    document.querySelector('#last').classList.add('border-red');
    return false
  } else {
    document.querySelector('#last').classList.remove('border-red');
  }

  if (!/^[a-zA-Z0-9.-_+]+@[a-zA-Z0-9.-_]+\.[a-z]{2,10}$/.test(contact.email)) {
    form.querySelector('#emailErrorMsg').textContent = "Veuillez renseigner correctement votre Email"
    document.querySelector('#email').classList.add('border-red');
    return false
  } else {
    document.querySelector('#email').classList.remove('border-red');
  }

  if (!contact.condition) {
    form.querySelector('#conditionErrorMsg').textContent = "Vérifier que vous acceptez les termes et conditions"
    return false
  } else {
    return true
  }
}