import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: 'Abdul',
  isActive: false
}

const userSlice = createSlice({
  name: 'user slice',
  initialState,
  reducers: {}
})

export const userReducer = userSlice.reducer