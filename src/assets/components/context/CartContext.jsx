import { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext(null);

const CartDispatchContext = createContext(null);

const initialState = {
  total: 0,
  data: JSON.parse(localStorage.getItem("cart")) || [],
};

// const sum = (cart) => cart.reduce((acc, item) => {
//   const product = products.find((product) => product.id === item.id);
//   return acc + product.price * item.qty;
// }, 0);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const existingItem = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        const newData = state.data.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
        return {
          ...state,
          data: newData,
        };
      } else {
        return {
          ...state,
          data: [...state.data, { ...action.payload, qty: 1 }],
        };
      }
    }

    case "UPDATE": {
      console.log(state, "UPDATE");
      return {
        ...state,
        total: action.payload,
      };
    }

    case "REMOVE": {
      const removeItem = state.data.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        data: [...removeItem],
      };
    }
    case "INCREMENT":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case "DECREASE":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
        ),
      };

    default: {
      throw Error("Unkwon action: " + action.type);
    }
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export function useCart() {
  return useContext(CartStateContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
