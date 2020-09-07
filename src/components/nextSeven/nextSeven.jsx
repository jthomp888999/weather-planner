import React, { useEffect, useState } from 'react';

import Day from "./day"

const NextSeven = () => {
  // useState hold json object with keys
  const [weatherData, setWeatherData] = useState({
    "daily": ""
  });

  // useEffect to hit api and populate state
  useEffect(() => {
    fetch('/nextseven')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setWeatherData({
          "daily": data
        });
      });
  }, []);

  return (
    <pre>
      {/* For now just returning a string until creation of interface */}
      {Object.keys(weatherData.daily).map((key, index) => (
        <div>
          <Day
            key={index}
            date={weatherData.daily[key].date}
            clouds={weatherData.daily[key].clouds}
            feels_like={weatherData.daily[key].feels_like}
            humidity={weatherData.daily[key].humidity}
            percip={weatherData.daily[key].percip}
            wind_speed={weatherData.daily[key].wind_speed}
          />
        </div>))}
    </pre>
  )
}

export default NextSeven;