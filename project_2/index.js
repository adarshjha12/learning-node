let input = document.getElementById('input')
let form = document.getElementById('form')
let city = input.value;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15facce67a51ac42cf416ee97a10bfc2`;

 form.addEventListener('submit', (e) =>{
      e.preventDefault()
      let city = input.value;
      console.log(city);

      
})
