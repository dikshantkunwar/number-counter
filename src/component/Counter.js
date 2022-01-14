export default function Counter(props) {
  return (
    <div>
      <p>{props.count}</p>
      <div>
        <button onClick={props.decrement}>-</button>
        <button onClick={props.reset}>0</button>
        <button onClick={props.increment}>+</button>
      </div>
    </div>
  )
}