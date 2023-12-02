import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authReducer = createReducer(initialState, {
  authSuccess: (state, action) => {
    state.isAuthenticated = true;
  },
  authFail: (state, action) => {
    state.isAuthenticated = false;
  },
});

export default authReducer;
