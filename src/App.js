import './App.css';
import Counter from './component/Counter';

import useCounter from './hooks/useCounter';

function App() {
  const [count, increment, decrement, reset] = useCounter(0);
  return (
    <div className="App">
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
      />
    </div>
  );
}

export default App;
