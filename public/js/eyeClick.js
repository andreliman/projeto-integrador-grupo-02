const passwordInput = document.getElementById("password");
const passwordInput2 = document.getElementById("password2");
const eyeIcon = document.querySelector(".fa-eye");
const eyeIcon2 = document.querySelector(".fa-eye 2");


function eyeClick() {
  let inputTypeIsPassword = passwordInput.type == "password";

  if (inputTypeIsPassword) {
    showPassword();
  } else {
    hidePassword();
  };
};

function eyeClick2() {
  let inputTypeIsPassword2 = passwordInput2.type == "password";
  
  if (inputTypeIsPassword2) {
    showPassword2();
  } else {
    hidePassword2();
  };
};

function showPassword() {
  passwordInput.setAttribute("type", "text");
  eyeIcon.style.color = "black";
};
function hidePassword() {
  passwordInput.setAttribute("type", "password");
  eyeIcon.style.color = "white";
};

function showPassword2() {
  passwordInput2.setAttribute("type", "text");
  eyeIcon2.style.color = "black";
};
function hidePassword2() {
  passwordInput2.setAttribute("type", "password");
  eyeIcon2.style.color = "white";
};