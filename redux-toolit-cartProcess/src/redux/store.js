import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./features/cart/cartSlice";
import userReducer from './features/apicalling/usersSlice';
import darkModeReducer from "./features/theme/themeSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        darkMode: darkModeReducer,
        users: userReducer
    },
})