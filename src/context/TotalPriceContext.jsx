import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext(null);

const TotalPriceDispatchContext = createContext(null);

const initialState = [
  {
    name: "cart",
    total: 0,
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        data: [...state.data, { ...action.payload, qty: 1 }],
      };
    }

    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }

    case "REMOVE": {
      return {
        ...state,
        data: (state.data = state.data.filter(
          (item) => item.id !== action.payload.id
        )),
      };
    }
    case "INCREMENT":
      return {
        ...state,
        data: state.data.find((item) => item.id === action.payload).qty++,
      };
    case "DECREASE": {
      const decItemInCart = state.data.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        data:
          decItemInCart.qty === 1
            ? state.data.filter((item) => item.id !== action.payload.id)
            : decItemInCart.qty--,
      };
    }

    default: {
      throw Error("Unkwon action: " + action.type);
    }
  }
};

export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, dispatch] = useReducer(cartReducer, initialState);
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
};

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext);
}
