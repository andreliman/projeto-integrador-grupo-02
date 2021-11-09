const form = document.querySelector(".form");
const kind = document.querySelector(".kind");
const breed = document.querySelector(".breed");
const genre = document.querySelector(".genre");
const kindOption = document.querySelector("#kind");
const breedOption = document.querySelector("#breed");

const {
  photo,
  pet_name: petName,
  nickname,
  birthday,
  local,
  bio,
} = form.elements;

//Validação Pet Name
function validatePetName() {
  const isPetNameWithinLimit = petName.value.length >= 2 && petName.value.length <= 30;

  const span = petName.nextElementSibling;
  span.innerText = "";
  span.style.cssText = "";

  if (!isPetNameWithinLimit) {
    petName.style.borderColor = "red";
    span.innerText = "Insira um nome! Min. 2 carateres";
    span.style.cssText =
      "display:block; text-align:left; margin:6px 5px 0 0; padding-left:5px; font-size:12px; font-weight:bold; color:red";
    petName.insertAdjacentElement("afterend", span);
    return false;
  }

  petName.style.borderColor = "green";
  return true;
}

petName.onblur = validatePetName;

//Validação apelido
function validateNickname() {
    const isNicknameWithinLimit = nickname.value.length >= 2 && nickname.value.length <= 30;
  
    const span = nickname.nextElementSibling;
    span.innerText = "";
    span.style.cssText = "";
  
    if (!isNicknameWithinLimit) {
      nickname.style.borderColor = "red";
      span.innerText = "Insira um apelido! Min. 2 carateres";
      span.style.cssText =
        "display:block; text-align:left; margin:6px 5px 0 0; padding-left:5px; font-size:12px; font-weight:bold; color:red";
      nickname.insertAdjacentElement("afterend", span);
      return false;
    }
  
    nickname.style.borderColor = "green";
    return true;
}
  
nickname.onblur = validateNickname;

//Validação kind
kind.addEventListener("change", function () {
    const span = kind.nextElementSibling;
    span.innerText = "";
    span.style.cssText = "";

    kind.style.borderColor = "green";
});

//Validação breed
if(breed != null){
  breed.addEventListener("change", function () {

    const span = breed.nextElementSibling;
    span.innerText = "";
    span.style.cssText = "";

    breed.style.borderColor = "green";
  });
}

//Validação gênero
genre.addEventListener("change", function () {
    const span = genre.nextElementSibling;
    span.innerText = "";
    span.style.cssText = "";

    genre.style.borderColor = "green";
});

//Validação Birthday

function validateBirthday() {
    const yearOfBirth = Number(moment(birthday.value).format('YYYY'));
    const currentYear = Number(moment().format('YYYY'));
    const age = currentYear - yearOfBirth;
    const isAgeWithinLimit = age >= 0 && age <= 50;
  
    const span = birthday.nextElementSibling;
    span.innerText = "";
    span.style.cssText = "";
  
    if(!isAgeWithinLimit) {
        birthday.style.borderColor = "red";
        span.innerText = "A idade do Pet deve estar entre 0 e 50 anos";
        span.style.cssText =
          "display:block; text-align:left; margin:6px 5px 0 0; padding-left:5px; font-size:12px; font-weight:bold; color:red";
        birthday.insertAdjacentElement("afterend", span);
        return false;
    }
  
    birthday.style.borderColor = "green";
    return true;
  }
  
birthday.onblur = validateBirthday;

//Validação Local
function validateLocal() {
    const isLocalWithinLimit = local.value.length >= 3 && local.value.length <= 30;
  
    const span = local.nextElementSibling;
    span.innerText = "";
    span.style.cssText = "";
  
    if (!isLocalWithinLimit) {
      local.style.borderColor = "red";
      span.innerText = "Insira uma cidade válida";
      span.style.cssText =
        "display:block; text-align:left; margin:6px 5px 0 0; padding-left:5px; font-size:12px; font-weight:bold; color:red";
      local.insertAdjacentElement("afterend", span);
      return false;
    }
  
    local.style.borderColor = "green";
    return true;
}

local.onblur = validateLocal;

//Validação Bio
if(bio != undefined) {
  function validateBio() {
      const isBioWithinLimit = bio.value.length >= 3 && bio.value.length <= 400;
      const charCount = document.querySelector(".char-count")
    
      const span = charCount.nextElementSibling;
      span.innerText = "";
      span.style.cssText = "";
    
      if (!isBioWithinLimit) {
        bio.style.borderColor = "red";
        span.innerText = "A bio deve ter entre 3 e 400 caracteres";
        span.style.cssText =
          "display:block; text-align:left; padding-left:50px; font-size:12px; font-weight:bold; color:red";
        charCount.insertAdjacentElement("afterend", span);
        return false;
      }
    
      bio.style.borderColor = "green";
      return true;
  }

  bio.addEventListener("keyup", function () {
      let span = bio.nextElementSibling;
      let digitedChar = bio.value.length;
      let remainingChar = 255 - digitedChar;

      span.innerText = `Restam ${remainingChar} caracteres`;
      bio.insertAdjacentElement("afterend", span);    
  });
    
  bio.onblur = validateBio;
}


window.addEventListener("load", function () {
  form.addEventListener("submit", function (event) {
    if (photo.value === "") {
      event.preventDefault();
      alert(`Por gentileza insira uma foto!`);
    }

    if (petName.value === "") {
      event.preventDefault();
      alert(`O campo NOME DO PET deve ser preenchido!`);
    }
    if (petName.style.borderColor == "red") {
      event.preventDefault();
      alert(`Preencha corretamente o campo NOME DO PET!`);
    }  

    if (nickname.value == "") {
      event.preventDefault();
      alert(`O campo APELIDO deve ser preenchido!`);
    }

    if (nickname.style.borderColor == "red") {
      event.preventDefault();
      alert(`Preencha corretamente o campo APELIDO`);
    }  

    if (kind.options[kind.selectedIndex].value == "") {
      event.preventDefault();
      alert(`O campo ESPÉCIE deve ser preenchido!`);
    }

    if(breed != null){
      if (breed.options[breed.selectedIndex].value == "") {
          event.preventDefault();
          alert(`O campo RAÇA deve ser preenchido!`);
      }
    }

    if (genre.options[genre.selectedIndex].value == "") {
        event.preventDefault();
        alert(`O campo GÊNERO deve ser preenchido!`);
    }
    if (birthday.value == "") {
        event.preventDefault();
        alert(`O campo ANIVERSÁRIO deve ser preenchido!`);
    }
  
    if (birthday.style.borderColor == "red") {
        event.preventDefault();
        alert(`Preencha corretamente o campo ANIVERSÁRIO`);
    }
    if (local.value == "") {
        event.preventDefault();
        alert(`O campo CIDADE deve ser preenchido!`);
    }
  
    if (local.style.borderColor == "red") {
        event.preventDefault();
        alert(`Preencha corretamente o campo CIDADE`);
    }  

    if(bio != undefined) {
      if (bio.value == "") {
          event.preventDefault();
          alert(`O campo BIO deve ser preenchido!`);
      }
      if (bio.style.borderColor == "red") {
          event.preventDefault();
          alert(`Preencha corretamente o campo BIO`);
      }
    }
  });
});