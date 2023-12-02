import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import databaseReducer from "./database";

const store = configureStore({
  reducer: { cart: cartReducer, auth: authReducer, database: databaseReducer },
});

export default store;
