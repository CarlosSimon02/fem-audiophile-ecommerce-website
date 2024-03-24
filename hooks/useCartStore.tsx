import { CartItem } from "@/utils/types";
import { create } from "zustand";

type State = {
  items: CartItem[];
  count: () => number;
  totalAmount: () => number;
};

type Actions = {
  addItem: (newItem: CartItem) => void;
  removeItem: (id: number) => void;
  removeAllItems: () => void;
  updateQuantityOfItem: (id: number, quantity: number) => void;
};

const useCartStore = create<State & Actions>()((set, get) => {
  return {
    items: [],
    count: () =>
      get().items.reduce((sum, { quantity }) => {
        return sum + quantity;
      }, 0),
    totalAmount: () =>
      get().items.reduce((sum, { price, quantity }) => {
        return sum + price * quantity;
      }, 0),
    addItem: (newItem: CartItem) =>
      set((state) => {
        //check if item already exist in array
        const existingItem = state.items.find((item) => item.id === newItem.id);

        if (existingItem) {
          //Just update the quantity
          const updatedItems = state.items.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          );

          return { items: [...updatedItems] };
        } else {
          return { items: [...state.items, newItem] };
        }
      }),
    removeItem: (id) =>
      set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
    removeAllItems: () => set(() => ({ items: [] })),
    updateQuantityOfItem: (id, quantity) =>
      set((state) => ({
        items: state.items.map((item) => {
          return item.id === id ? { ...item, quantity: quantity } : item;
        }),
      })),
  };
});

export default useCartStore;
