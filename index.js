const getWeatherBtn = document.querySelector(".weatherbtn")

const getWeatherForCity = (city) => {

    const encodedCity = encodeURIComponent(city)

    fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=ed104a87c20f401d9ea135033230504&q=${encodedCity}&days=5`
      ).then((res) => {
        return res.json()
      }).then(data => {
        console.log(data)
          const cityNameDiv = document.getElementById('cityname');
          cityNameDiv.innerHTML = data.location.name
        //   console.log(cityname)
          
          const degreesDiv  = document.getElementById('degrees')
          degreesDiv.innerHTML = `${data.current.temp_c}°C`
      
          const imageTag = document.getElementById('image')
          imageTag.setAttribute('src', data.current.condition.icon)

          const textTag = document.getElementById('weathertext')
          textTag.innerHTML = data.current.condition.text
                    
        //   if (data.current.condition.text == "Light snow"){
        //     document.body.style.background = "grey"
        // }
        // if (data.current.condition.text == "Sunny"){
        //     document.body.style.background = "lightblue"
        // }

          console.log(textTag)
        //   .toLocaleString('default', {weekday: "long"})
          const forecastDiv = document.getElementById("forecast")
          data.forecast.forecastday.forEach(el => {
            const d = document.createElement('div')
            const dayOfWeek = new Date(el.date_epoch)
            for (let i = dayOfWeek; i < dayOfWeek + 5; i++){
                console.log(i)
            }
            d.innerHTML = `The weather for ${dayOfWeek} is ${el.day.maxtemp_c}°C`
            // d.innerHTML = el.day.maxtemp_c
            
            forecast.appendChild(d)
            console.log(el)
          })
        
        
          
      });

    // console.log(city)

} 
// 
// const nextDayOfWeek = new Date()
// nextDayOfWeek.setDate(dayOfWeek.getDate() + 1)        
// console.log(dayOfWeek)

getWeatherBtn.addEventListener('click', function(){
    const value = document.getElementById('city').value
    getWeatherForCity(value)

})

// const d = new Date();
// let text = d.toLocaleString('default', {weekday:"long", hour:"numeric"});
// console.log(text)

// var now = new Date();
// var daysOfYear = [];
// for (var d = new Date(2023, 3, 4); d <= now; d.setDate(d.getDate() + 1)) {
//     daysOfYear.push(new Date(d));
// }
// console.log(daysOfYear)

// const today = new Date()
// // to return the date number(1-31) for the specified date
// console.log("today => ",today)
// let tomorrow =  new Date()
// tomorrow.setDate(today.getDate() + 1)
// //returns the tomorrow date
// console.log("tomorrow => ",tomorrow)

// document.body.style.background = "red"