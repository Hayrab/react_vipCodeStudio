import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;


// reducer with slice
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
    },
});

//store

const store = configureStore({
    reducer: {
        cart : cartSlice.reducer,
    },
});

console.log("On Create Store: ", store.getState());

// subscripe

store.subscribe(()=> {
    console.log("STORE CHANGE: ", store.getState());
})

// dispatch

store.dispatch(cartSlice.actions.addToCart({id: 1, qty: 20}));