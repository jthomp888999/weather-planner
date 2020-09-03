import React, {useEffect, useState} from 'react';

const App = () => {
  // useState hold json object with keys
  const [weatherData, setWeatherData] = useState({
    "clouds": "",
    "feels_like": "",
    "humidity": "",
    "wind_speed": ""
  });

  // useEffect to hit api and populate state
  useEffect(() => {
    fetch('/current')
    .then(res => {
      return res.json()
    })
    .then(data => {
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
      {/* For now just returning a string until creation of interface */}
      {JSON.stringify(weatherData)}
    </pre>
  )
}

export default App;
