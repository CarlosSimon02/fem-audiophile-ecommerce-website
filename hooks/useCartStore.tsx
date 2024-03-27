import { CartItem } from "@/utils/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  items: CartItem[];
};

type Actions = {
  addItem: (newItem: CartItem) => void;
  removeItem: (id: number) => void;
  removeAllItems: () => void;
  updateQuantityOfItem: (id: number, quantity: number) => void;
};

const useCartStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (newItem: CartItem) =>
        set((state) => {
          //check if item already exist in array
          const existingItem = state.items.find(
            (item) => item.id === newItem.id
          );

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
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      removeAllItems: () => set(() => ({ items: [] })),
      updateQuantityOfItem: (id, quantity) =>
        set((state) => ({
          items: state.items.map((item) => {
            return item.id === id ? { ...item, quantity: quantity } : item;
          }),
        })),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
