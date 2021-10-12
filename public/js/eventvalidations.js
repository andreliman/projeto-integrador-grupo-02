const form = document.querySelector('.evento-form');
const errorContainer = document.querySelector('.errors-container');

const { name:eventName, beginning_date, ends_date, hour, finish_hour, local, description } = form.elements;


const formElements = [eventName, beginning_date, ends_date, hour, finish_hour, local, description];

function checkIfEmpty() {
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

  local.onblur = checkIfEmpty;

//   function checkIfEmpty(input, errors) {
//     if (!input.value.trim().length) {
//       errors.push(`Preenha o campo ${input.name}, noob`);
//     }
//   };


form.addEventListener("submit", function(event){
    if(!checkIfEmpty()){
        return event.preventDefault();
    }
})
