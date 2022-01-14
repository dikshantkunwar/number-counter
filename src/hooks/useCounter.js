import {useState} from 'react';

const useCounter = (start) => {
  const [count, setCount] = useState(start);

  const increment = function() {
    setCount(count + 1);
  };

  const decrement = function() {
    setCount(count - 1);
  };

  const reset = function() {
    setCount(0)
  };

  return [count, increment, decrement, reset];
};

export default useCounter;