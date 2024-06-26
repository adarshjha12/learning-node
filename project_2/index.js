let input = document.getElementById('input')
let form = document.getElementById('form')
let weatherdiv = document.getElementById('weather-data')

 form.addEventListener('submit',async (e) =>{
      e.preventDefault()
      
      try {
            let city = input.value;
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15facce67a51ac42cf416ee97a10bfc2`;

            let response = await fetch(url)
            
            if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
          
            let data = await response.json()
            console.log(data);
            weatherdiv.innerHTML = `<h2>Temp: ${(data.main.temp - 273).toFixed(2)}&deg;C</h2> </br> 
            <h2>${data.name} </h2>`

      } catch (error) {
            console.log(error);
      }


})
