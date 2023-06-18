import useCounterStore from "./store";

export default function AsyncStorePage() {
  const counter = useCounterStore((state) => state.counter);
  const isLoading = useCounterStore((state) => state.isLoading);
  const handleIncrement = useCounterStore((state) => state.increment);

  return (
    <>
      <h2 className="center">Async Store</h2>
      <div>
        <p className="bold center">Counter Value: {counter}</p>
        <div className="counter-actions">
          <button onClick={handleIncrement} disabled={isLoading}>
            {isLoading ? "Please wait ..." : "Increment"}
          </button>
        </div>
      </div>
    </>
  );
}
