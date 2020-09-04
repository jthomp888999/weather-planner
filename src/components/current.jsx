import React, {useEffect, useState} from 'react';

const Current = () => {
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
        "clouds": data.clouds,
        "feels_like": data.feels_like,
        "humidity": data.humidity,
        "wind_speed": data.wind_speed
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

export default Current;
