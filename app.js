window.addEventListener("load", () => {
  const degree = document.getElementById("weather-degree");
  const timeZone = document.getElementById("location");
  const weatherDescription = document.getElementById("description");
  let latitude;
  let longitude;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((ilaqa) => {
      latitude = ilaqa.coords.latitude;
      longitude = ilaqa.coords.longitude;

      const weatherApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&APPID=1c2d94fd9fb8c08909c2401732843bb2`;
      fetch(weatherApi)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { temp, feels_like } = data.current;
          degree.innerHTML = temp + " C";
          weatherDescription.innerHTML = feels_like + " C";
          timeZone.innerHTML = data.timezone;
        });
    });
  }
});
