import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");
const loginSession = createAction("CREATE_SESSION")

// reducer

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload); // state.cart = [...state.cart, action.payload]
    })

});

const loginReducer = createReducer({status: false}, (builder) => {
    builder.addCase(loginSession, (state, action) => {
        state.status = true; 
    })
})

// store

const store = configureStore({
    reducer: {
        login : loginReducer,
        cart : cartReducer,
    },
});

console.log("On Create Store: ", store.getState());

// subscripe

store.subscribe(()=> {
    console.log("STORE CHANGE: ", store.getState());
})

// dispatch

store.dispatch(addToCart({id: 1, qty: 20})); // { type: "ADD_TO_CART", payload: {id: 10, qty: 5}};
store.dispatch(loginSession());

