import React, {useEffect, useState} from 'react';

const App = () => {
  const [weatherData, setWeatherData] = useState({
    "clouds": "",
    "feels_like": "",
    "humidity": "",
    "wind_speed": ""
  });

  useEffect(() => {
    console.log("fetching...")
    fetch('/current')
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      setWeatherData({
        "clouds": data.current.clouds,
        "feels_like": data.current.feels_like,
        "humidity": data.current.humidity,
        "wind_speed": data.current.wind_speed
    });
    });
  }, []);

  return (
    <pre>
      {JSON.stringify(weatherData)}
    </pre>
  )
}

export default App;
