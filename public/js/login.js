const form = document.querySelector('.form');

const { email, password } = form.elements;

function validateEmail() {
  const user = email.value.substring(0, email.value.indexOf('@'));
  const domain = email.value.substring(email.value.indexOf('@') + 1, email.value.length);

  const span = email.nextElementSibling;
  span.innerText = "";
  span.style.cssText = "";

  if ((user.length >=1) &&
    (domain.length >=3) &&
    (user.search("@")==-1) &&
    (domain.search("@")==-1) &&
    (user.search(" ")==-1) &&
    (domain.search(" ")==-1) &&
    (domain.search(".")!=-1) &&
    (domain.indexOf(".") >=1)&&
    (domain.lastIndexOf(".") < domain.length - 1)) {
    email.style.borderColor = "green";
    span.innerText = 'O email é válido!';
    span.style.cssText = "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:green"
    email.insertAdjacentElement('afterend', span);
    return true;
} else {
    email.style.borderColor = "red";
    span.innerText = 'O email deve ser válido!';
    span.style.cssText = "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:red"
    email.insertAdjacentElement('afterend', span);
    return false;
}
};

email.onblur = validateEmail;

function validatePassword() {
  const isPasswordWithinLimit = password.value.length >= 8;

  const divPassword = document.querySelector(".password");
  const span = document.querySelector(".error-message-password");
  span.innerText = "";
  span.style.cssText = "";

  if (!isPasswordWithinLimit) {
    password.style.borderColor = "red";
    span.innerText = "A senha deve conter no mínimo 8 caracteres!";
    span.style.cssText =
      "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:red";
    divPassword.insertAdjacentElement("afterend", span);
    return false;
  } else {
    password.style.borderColor = "green";
    span.innerText = "A senha é válida!";
    span.style.cssText =
      "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:green";
    divPassword.insertAdjacentElement("afterend", span);
    return true;
  }
}

password.onblur = validatePassword;

window.addEventListener("load", function(){
  form.addEventListener("submit", function(event){
    if(email.value == ""){
      event.preventDefault();
      alert(`O campo EMAIL deve ser preenchido!`);
    }

    if (email.style.borderColor == "red") {
      event.preventDefault();
      alert(`Preencha corretamente o campo EMAIL`);
    } 

    if(password.value == ""){
      event.preventDefault();
      alert(`O campo SENHA deve ser preenchido!`);
    }

    if (password.style.borderColor == "red") {
      event.preventDefault();
      alert(`Preencha corretamente o campo SENHA!`);
    }  
  })
});  