import React from "react";
import { Day } from "../Day";
import { useApi } from "../../Context/apiContex";
import "./styles.css";

export const ListDays = () => {
  const weather = useApi()
  if (!weather.daily){
    return <p>Loading...</p>
  }
  return (
    <ul className='daily'>
      {weather.daily.map(day => (
        <Day key={day.dt} {...day} />
      ))}
    </ul>
  )
}
