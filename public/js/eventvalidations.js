const form = document.querySelector('.evento-form');
const errorContainer = document.querySelector('.errors-container');

const { name:eventName, beginning_date, ends_date, hour, finish_hour, local, description } = form.elements;

const formElements = [eventName, beginning_date, ends_date, hour, finish_hour, local, description];

function checkIfEmpty() {
    const isValidEventName = eventName.value.trim().length > 0;
    const span = eventName.nextElementSibling;
    span.innerText= "";

    if (!isValidEventName){
        span.innerText= "o campo não pode estar vazio";
        eventName.insertAdjacentElement("afterend", span);
        eventName.style.borderColor = "red";
        return false;
    };
    eventName.style.borderColor = "green";
    return true;

  };

  eventName.onblur = checkIfEmpty;

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
