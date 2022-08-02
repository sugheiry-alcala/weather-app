import React from 'react'
import {useApi }from "../../Context/apiContex";
import { Hour } from "../Hour";
import "./style.css"

export const NextHours = () => {
  const weather = useApi()
  if (!weather.daily){
    return <p>Loading...</p>
  }

 weather.hourly.length = 6
  return (
    <ul className='hourse container' >
      {weather.hourly.map((hour, id) => <Hour {...hour} addHour={id} />)}
    </ul>
  )
}