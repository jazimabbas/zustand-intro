import useCounterStore, { onIncrement, onDecrement, onReset } from "./store";

export default function ExternalStoreActionsPage() {
  const counter = useCounterStore((state) => state.counter);

  return (
    <>
      <h2 className="center">External Store Actions</h2>
      <div>
        <p className="bold center">Counter Value: {counter}</p>
        <div className="counter-actions">
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onDecrement}>Decrement</button>
          <button onClick={onReset}>Reset</button>
        </div>
      </div>
    </>
  );
}
