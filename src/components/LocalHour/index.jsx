import React, { useEffect, useState } from 'react'

export const LocalHour = () => {
  const [hour, setHour] = useState(null)
  useEffect(() => {
    fetch("https://worldtimeapi.org/api/timezone/Europe/Paris")
      .then(response => response.json())
      .then(data => {
        const localDate = new Date(data.datetime.split(".")[0])
        setHour(localDate)
      })
  }, [])


  if(!hour){
    return <p>Loading...</p>
  }

  return (
    <div className='container' >
      <p className='localhour' >Local time:{hour.getHours()}:{hour.getMinutes()}</p>
    </div>
  )
}