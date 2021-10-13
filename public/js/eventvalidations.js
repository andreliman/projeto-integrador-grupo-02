const form = document.querySelector('.evento-form');


const { name:eventName, beginning_date, ends_date, hour, finish_hour, local, description } = form.elements;

function checkNameIfEmpty() {
    const isValidName = eventName.value.trim().length > 0;
    const span = eventName.nextElementSibling;
    span.innerText= "";

    if (!isValidName){
        span.innerText= "o campo não pode estar vazio";
        eventName.insertAdjacentElement("afterend", span);
        eventName.style.borderColor = "red";
        return false;
    };
    eventName.style.borderColor = "green";
    return true;

  };

  eventName.onblur = checkNameIfEmpty;




function checkLocalIfEmpty() {
    const isValidLocal = local.value.trim().length > 0;
    const span = local.nextElementSibling;
    span.innerText= "";

    if (!isValidLocal){
        span.innerText= "o campo não pode estar vazio";
        local.insertAdjacentElement("afterend", span);
        local.style.borderColor = "red";
        return false;
    };
    local.style.borderColor = "green";
    return true;

  };

  local.onblur = checkLocalIfEmpty;

  function checkDescriptionIfEmpty() {
    const isValidDescription = description.value.trim().length > 0;
    const span = description.nextElementSibling;
    span.innerText= "";

    if (!isValidDescription){
        span.innerText= "o campo não pode estar vazio";
        description.insertAdjacentElement("afterend", span);
        description.style.borderColor = "red";
        return false;
    };
    description.style.borderColor = "green";
    return true;

  };

  description.onblur = checkDescriptionIfEmpty;

window.addEventListener("load", function(){
    form.addEventListener("submit", function(event){
    if(!checkNameIfEmpty()){
        event.preventDefault();
        alert(`O nome do evento precisa estar definido`);
    };
    if(!checkLocalIfEmpty()){
        event.preventDefault();
        alert(`O local precisa estar definido`);
    };
    if(!checkDescriptionIfEmpty()){
        event.preventDefault();
        alert(`É necessário descrever o evento`);
    }
})
})

