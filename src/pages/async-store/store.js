import { create } from "zustand";

const counterStore = create((set) => ({
  counter: 0,
  isLoading: false,
  increment: async () => {
    set({ isLoading: true });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    set((state) => ({ counter: state.counter + 1 }));
    set({ isLoading: false });
  },
}));

export default counterStore;
