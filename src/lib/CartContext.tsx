import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define types
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

interface CartContextType {
  state: CartState;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Initial state
const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedItems: CartItem[];

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        // Item doesn't exist, add new item
        updatedItems = [...state.items, action.payload];
      }

      // Calculate new totals
      const totalItems = updatedItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const totalPrice = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );

      // Calculate new totals
      const totalItems = updatedItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const totalPrice = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;

      // Don't allow negative quantities
      if (quantity <= 0) {
        return state;
      }

      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );

      // Calculate new totals
      const totalItems = updatedItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const totalPrice = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

// Provider component
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Actions
  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...item, quantity: 1 },
    });
  };

  const removeItem = (id: string) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const value = {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
