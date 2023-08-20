import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});


// Update Local Storage on Page Refresh:
// In your store.js, you can listen for changes in the Redux store and update the local storage accordingly. 
//To do this, you can use the store.subscribe method:
store.subscribe(() => {
    const cartItems = store.getState().cart.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  });

export default store;
