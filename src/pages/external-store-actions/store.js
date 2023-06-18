import { create } from "zustand";

const counterStore = create((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter === 0 ? 0 : state.counter - 1 })),
  reset: () => set({ counter: 0 }),
}));

export default counterStore;
