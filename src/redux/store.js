import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./reducers/roleReducer";

const store = configureStore({
  reducer: {
    role: roleReducer,
  },
});

export default store;
