import { create } from "zustand";

const counterStore = create(() => ({
  counter: 0,
}));

const onIncrement = () => counterStore.setState((state) => ({ counter: state.counter + 1 }));
const onDecrement = () =>
  counterStore.setState((state) => ({ counter: state.counter === 0 ? 0 : state.counter - 1 }));
const onReset = () => counterStore.setState({ counter: 0 });

export default counterStore;
export { onIncrement, onDecrement, onReset };
