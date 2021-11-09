const city = document.querySelector(".nav__city");
const max = document.querySelector(".nav__temp_max");
const min = document.querySelector(".nav__temp_min");

window.addEventListener("load", async (event) => {
    event.preventDefault();

    const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
          'x-rapidapi-key': '8ce104473emsh526368bb0aafa8ap13cbcfjsn9c97a1ccc5d7'
        }
      };
    
    const weatherData = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city.innerText}&days=1`, options).then(response => response.json());
      
    const maxWeather = Math.round(weatherData.forecast.forecastday[0].day.maxtemp_c);
    const minWeather = Math.round(weatherData.forecast.forecastday[0].day.mintemp_c);

    max.innerText = `máx: ${maxWeather}°C`;
    min.innerText = `mín: ${minWeather}°C`;
});