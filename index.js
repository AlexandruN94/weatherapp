const getWeatherForCity = (city) => {

    const encodedCity = encodeURIComponent(city)

    fetch(
        `https://api.weatherapi.com/v1/current.json?key=ed104a87c20f401d9ea135033230504&q=${encodedCity}`
      ).then((res) => {
        return res.json()
      }).then(data => {
          console.log(data)
          const orasDiv = document.getElementById('oras');
          orasDiv.innerHTML = data.location.name
          
          const gradeDiv  =   document.getElementById('grade')
          gradeDiv.innerHTML = `${data.current.temp_c}°C`
      
          const imageTag = document.getElementById('imagine')
          imageTag.setAttribute('src', data.current.condition.icon)
      
      });

    console.log(city)

} 


const onPressButton = () => {
    const value = document.getElementById('city').value
    console.log(value)
    getWeatherForCity(value)
}

