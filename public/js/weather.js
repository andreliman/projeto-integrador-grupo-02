async function getContent() {
    try {
        const response = await fetch('https://apiprevmet3.inmet.gov.br/previsao/5300108');
        const data = await response.json();
        console.log(data);
    } catch (error){
        console.log("ERRROOUUU!");
    }
}

getContent();