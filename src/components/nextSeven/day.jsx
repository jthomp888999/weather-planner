import React from 'react'

const Day = (props) => {
  const { date, clouds, feels_like, humidity, percip, wind_speed } = props

  return (
    <>
      {console.log(props)}
      {JSON.stringify(props)}
    </>
  )
}

export default Day;