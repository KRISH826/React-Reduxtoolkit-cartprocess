/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../../productData";

const initialState = {
    ItemValue: [],
    productItem: ProductData,
    TotalQuantity: 0,
    TotalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.ItemValue.findIndex(
                (item) => item.id === action.payload.id
            );
            if (find >= 0) {
                state.ItemValue[find].quantity += 1;
            } else {
                state.ItemValue.push(action.payload);
            }
        },

        removeToCart: (state, action) => {
            state.ItemValue = state.ItemValue.filter(
                (item) => item.id !== action.payload.id
            );
        },

        getCartTotal: (state) => {
            let { TotalQuantity, TotalPrice } = state.ItemValue.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    console.log(cartItem);
                    console.log(price, quantity);
                    const itemTotal = price * quantity;
                    cartTotal.TotalPrice += itemTotal;
                    cartTotal.TotalQuantity += quantity;

                    return cartTotal;
                },
                {
                    TotalQuantity: 0,
                    TotalPrice: 0,
                    DiscountPrice: 0,
                }
            );
            state.TotalPrice = parseInt(TotalPrice.toFixed(2));
            state.TotalQuantity = TotalQuantity;
        },

        increaseQuantity: (state, action) => {
            state.ItemValue = state.ItemValue.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        },

        decreaseQuantity: (state, action) => {
            state.ItemValue = state.ItemValue.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        },
    },
});

export const {
    addToCart,
    getCartTotal,
    removeToCart,
    increaseQuantity,
    decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
