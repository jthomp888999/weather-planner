import React, {useEffect, useState} from 'react';

const NextSeven = () => {
  // useState hold json object with keys
  const [weatherData, setWeatherData] = useState({
    "humidity": ""
  });

  // useEffect to hit api and populate state
  useEffect(() => {
    fetch('/nextseven')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setWeatherData({
        "humidity": data.daily[0].humidity
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

export default NextSeven;