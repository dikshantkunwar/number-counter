import { useEffect, useState } from 'react';
import './App.css';
import Counter from './component/Counter';

import axios from 'axios'
import useCounter from './hooks/useCounter';

const url = 'https://api.openweathermap.org/data/2.5/weather?q='

function App() {
  const [count, increment, decrement, reset] = useCounter(0);
  const [city, setCity]  = useState('london');
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  

  useEffect(() => {
    axios
      .get(url + city + '&appid=97c3e96f6f3c34c11624097dc5b80b8d')
      .then(res => {
        const data = res.data;
        setWeather(data.weather);
        setLocation(data.name);
      });
  },)
  return (
    <div className="App">
      {/*
        --- weather display component will have 
          --- weather icon 
            --- degrees 
      <WeatherDisplay 
        {...weather}
      />

      <LocationDisplay 
        {..location}
      <
       */}
       <div>
         <p>
           {weather}
         </p>
         <p>
           {location}
         </p>
       </div>

      <Counter
        count = {count}
        increment = {increment}
        decrement = {decrement}
        reset = {reset}
      />
      <Counter
        count = {count}
        increment = {increment}
        decrement = {decrement}
        reset = {reset}
        onClick={setCity}
      />
    </div>
  );
}

export default App;
