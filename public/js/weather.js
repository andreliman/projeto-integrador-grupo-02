const city = document.querySelector(".nav__city");
const max = document.querySelector(".nav__temp_max");
const min = document.querySelector(".nav__temp_min");


max.addEventListener("load", (error) => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://api.hgbrasil.com/weather?key=a649fad7&city_name=${city.value},SP`, options)
    .then(response => { response.json()
        .then(data => {
            console.log(data);
            const tempMax = data.forecast.max
            max.inneText = `máx: ${tempMax}°C`
            return max;
        })
    .catch(error => {
        max.innerText = "ERRROOOUUU";
        return max;
    })
    })
});