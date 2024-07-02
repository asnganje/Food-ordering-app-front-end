import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slices/userSlice";
import { dropDownReducer } from "../slices/dropDownSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: dropDownReducer
  }
})

