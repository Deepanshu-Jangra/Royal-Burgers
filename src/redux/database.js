import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cart: {
    cartItems: {
      cheeseBurger: {
        quantity: 0,
        price: 200,
      },
      vegCheeseBurger: {
        quantity: 0,
        price: 500,
      },
      burgerWithFries: {
        quantity: 0,
        price: 1800,
      },
    },
    subTotal: 0,
    tax: 0,
    shippingCharges: 0,
    total: 0,
    shippingInfo: null,
    paymentMethod: "",
    orderId: "",
    totalQty: 0,
  },

  isOrdered: false,
};

const databaseReducer = createReducer(initialState, {
  sendCartData: (state, action) => {
    state.cart = action.payload;
  },
  calculateTotalQty: (state, action) => {
    state.cart.totalQty =
      state.cart.cartItems.cheeseBurger.quantity +
      state.cart.cartItems.vegCheeseBurger.quantity +
      state.cart.cartItems.burgerWithFries.quantity;
  },

  setIsOrdered: (state, action) => {
    state.isOrdered = true;
  },
});

export default databaseReducer;
