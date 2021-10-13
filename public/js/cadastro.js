const form = document.querySelector(".form");

const {
  name: nameInput,
  phone,
  email,
  password,
  passwordConfirm,
} = form.elements;

//Validação Nome
function validateUserName() {
  const isNameInputWithinLimit =
    nameInput.value.includes(" ") &&
    nameInput.value.length >= 2 &&
    nameInput.value.length <= 60;

  const span = nameInput.nextElementSibling;
  span.innerText = "";
  span.style.cssText = "";

  if (!isNameInputWithinLimit) {
    nameInput.style.borderColor = "red";
    span.innerText = "Por favor incluir nome e sobrenome!";
    span.style.cssText =
      "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:red";
    nameInput.insertAdjacentElement("afterend", span);
    return false;
  }

  nameInput.style.borderColor = "green";
  span.innerText = "O nome é válido!";
  span.style.cssText =
    "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:green";
  nameInput.insertAdjacentElement("afterend", span);
  return true;
}

nameInput.onblur = validateUserName;

//Validação Phone
function validadetePhoneNumber() {
  const isPhoneNumberWithinLimit = phone.value.length >= 14;

  const span = phone.nextElementSibling;
  span.innerText = "";
  span.style.cssText = "";

  if (!isPhoneNumberWithinLimit) {
    phone.style.borderColor = "red";
    span.innerText = "Por favor inserir número válido com DDD";
    span.style.cssText =
      "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:red";
    phone.insertAdjacentElement("afterend", span);
    return false;
  }

  phone.style.borderColor = "green";
  span.innerText = "Telefone válido!";
  span.style.cssText =
    "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:green";
  phone.insertAdjacentElement("afterend", span);
  return true;
}

function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}
function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}
function mtel(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id(el) {
  return document.getElementById(el);
}

window.onload = function () {
  phone.onkeyup = function () {
    mascara(this, mtel);
  };
};

phone.onblur = validadetePhoneNumber;

//Validação email
async function validateEmail() {
  const user = email.value.substring(0, email.value.indexOf("@"));
  const domain = email.value.substring(
    email.value.indexOf("@") + 1,
    email.value.length
  );

  const span = email.nextElementSibling;
  span.innerText = "";
  span.style.cssText = "";

  if (
    user.length >= 1 &&
    domain.length >= 3 &&
    user.search("@") == -1 &&
    domain.search("@") == -1 &&
    user.search(" ") == -1 &&
    domain.search(" ") == -1 &&
    domain.search(".") != -1 &&
    domain.indexOf(".") >= 1 &&
    domain.lastIndexOf(".") < domain.length - 1
  ) {
    email.style.borderColor = "green";
    span.innerText = "O email é válido!";
    span.style.cssText =
      "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:green";
    email.insertAdjacentElement("afterend", span);
    return true;
  } else {
    email.style.borderColor = "red";
    span.innerText = "O email deve ser válido!";
    span.style.cssText =
      "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:red";
    email.insertAdjacentElement("afterend", span);
    return false;
  }
}

email.onblur = validateEmail;

//Validação password
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

//Validação passwordConfirm
function validatePasswordConfirm() {
  const divPasswordConfirm = document.querySelector(".passwordConfirm");
  const span = document.querySelector(".error-message-passwordConfirm");
  span.innerText = "";
  span.style.cssText = "";

  if (passwordConfirm.value != password.value) {
    passwordConfirm.style.borderColor = "red";
    span.innerText = "As senhas não conferem!";
    span.style.cssText =
      "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:red";
    divPasswordConfirm.insertAdjacentElement("afterend", span);
    return false;
  } else {
    passwordConfirm.style.borderColor = "green";
    span.innerText = "As senhas conferem!";
    span.style.cssText =
      "display:block; text-align:left; margin:5px; padding-left:5px; font-size:12px; font-weight:bold; color:green";
    divPasswordConfirm.insertAdjacentElement("afterend", span);
    return true;
  }
}

passwordConfirm.onblur = validatePasswordConfirm;

window.addEventListener("load", function () {
  form.addEventListener("submit", function (event) {
    if (nameInput.value == "") {
      event.preventDefault();
      alert(`O campo NOME deve ser preenchido!`);
    }

    if (nameInput.style.borderColor == "red") {
      event.preventDefault();
      alert(`Preencha corretamente o campo NOME!`);
    }  

    if (phone.value == "") {
      event.preventDefault();
      alert(`O campo TELEFONE deve ser preenchido!`);
    }
    if (phone.style.borderColor == "red") {
      event.preventDefault();
      alert(`Preencha corretamente o campo TELEFONE!`);
    }  

    if (email.value == "") {
      event.preventDefault();
      alert(`O campo EMAIL deve ser preenchido!`);
    }

    if (email.style.borderColor == "red") {
      event.preventDefault();
      alert(`Preencha corretamente o campo EMAIL`);
    }  

    if (password.value == "") {
      event.preventDefault();
      alert(`O campo SENHA deve ser preenchido!`);
    }

    if (password.style.borderColor == "red") {
      event.preventDefault();
      alert(`Preencha corretamente o campo SENHA!`);
    }  

    if (passwordConfirm.value == "") {
      event.preventDefault();
      alert(`O campo CONFIRMAR SENHA deve ser preenchido!`);
    }

    if (passwordConfirm.style.borderColor == "red") {
      event.preventDefault();
      alert(`Preencha corretamente o campo CONFIRMAR SENHA!`);
    }  
  });
});
