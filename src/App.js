import { useEffect, useState } from 'react';
import './App.css';
import Counter from './component/Counter';

import useWeatherAPI from './hooks/useWeatherAPI';
import useCounter from './hooks/useCounter';

const url = 'https://api.openweathermap.org/data/2.5/weather?q='

function App() {
  const [count, increment, decrement, reset] = useCounter(0);
  const {weather, location} = useWeatherAPI('');

  return (
    <div className="App">
       <div>
         <p>
           {weather}
         </p>
         <p>
           {location}
         </p>
       </div>
      <button onClick={useWeatherAPI("London")}>London Weather</button>
      <button onClick={useWeatherAPI("Tokyo")}>Tokyo Weather</button>
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
