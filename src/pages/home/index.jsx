import useCounterStore from "./store";

export default function Homepage() {
  const counter = useCounterStore((state) => state.counter);
  const handleIncrement = useCounterStore((state) => state.increment);
  const handleDecrement = useCounterStore((state) => state.decrement);
  const handleReset = useCounterStore((state) => state.reset);

  return (
    <>
      <h2 className="center">Counter</h2>
      <div>
        <p className="bold center">Counter Value: {counter}</p>
        <div className="counter-actions">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}
