import { createReducer } from "@reduxjs/toolkit";

const initialState = {
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
  shippingInfo: {},
  paymentMethod: "",
};

const cartReducer = createReducer(initialState, {
  cheeseBurgerIncrement: (state) => {
    state.cartItems.cheeseBurger.quantity += 1;
  },
  vegCheeseBurgerIncrement: (state) => {
    state.cartItems.vegCheeseBurger.quantity += 1;
  },
  burgerWithFriesIncrement: (state) => {
    state.cartItems.burgerWithFries.quantity += 1;
  },
  cheeseBurgerDecrement: (state) => {
    state.cartItems.cheeseBurger.quantity -= 1;
  },
  vegCheeseBurgerDecrement: (state) => {
    state.cartItems.vegCheeseBurger.quantity -= 1;
  },
  burgerWithFriesDecrement: (state) => {
    state.cartItems.burgerWithFries.quantity -= 1;
  },

  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.cheeseBurger.price *
        state.cartItems.cheeseBurger.quantity +
      state.cartItems.vegCheeseBurger.price *
        state.cartItems.vegCheeseBurger.quantity +
      state.cartItems.burgerWithFries.price *
        state.cartItems.burgerWithFries.quantity;

    state.tax = state.subTotal * 0.18;
    state.shippingCharges = state.subTotal > 1000 ? 0 : 200;

    if (state.subTotal * 2 === 0) {
      state.shippingCharges = 0;
    }

    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  emptyState: (state) => {
    state.cartItems = {
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
    };

    state.subTotal = 0;
    state.tax = 0;
    state.shippingCharges = 0;
    state.total = 0;
    state.shippingInfo = {};
    state.paymentMethod = "";
  },

  addShippingInfo: (state, action) => {
    state.shippingInfo = {
      name: action.payload.enteredName,
      street: action.payload.enteredStreet,
      city: action.payload.enteredCity,
      state: action.payload.enteredState,
      pincode: action.payload.enteredPincode,
      phoneNum: action.payload.enteredPhoneNum,
    };
  },

  addPaymentMethod: (state, action) => {
    state.paymentMethod = action.payload;
  },

  resetPaymentMethod: (state, action) => {
    state.paymentMethod = "";
  },
});

export default cartReducer;
