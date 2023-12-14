let url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd66798c18msh8a233949d44a253p11cdcajsna63024bdc40f',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city
fetch(url, options)
	.then(response => response.json())
		.then(response => {
		console.log(response);
		response.forEach(forecasts => {
			const markup = `<li>${forecasts.day}</li>`;
			document.querySelector('ul').insertAdjacentHTML("beforeend", markup);
		});
		weather.innerHTML = response.weather 
		// visibility.innerHTML = response.visibility
		humidity.innerHTML = response.humidity
		pressure.innerHTML = response.pressure
		temperature.innerHTML = response.temperature
		temp_max.innerHTML = response.temp_max
		temp_min.innerHTML = response.temp_min
		description.innerHTML = response.description
		icon.innerHTML = response.icon
		id.innerHTML = response.id
		wind.innerHTML = response.wind
		console.log(wind)
		deg.innerHTML = response.deg
		speed.innerHTML = response.speed
		country.innerHTML = response.country  
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		day.innerHTML = response.day
		date.innerHTML = response.date 
		high.innerHTML = response.high
		low.innerHTML = response.low
		text.innerHTML = response.text
		code.innerHTML = response.code
		
	})
	.catch(error=> console.log(error));
};

submit.addEventListener('click', (e)=>{
	e.preventDefault()
getWeather(city.value)
})
getWeather("")

