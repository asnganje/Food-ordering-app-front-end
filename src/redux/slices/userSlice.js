import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: 'Abdul',
  isActive: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state)=> {
      state.name=null
    }
  }
})

export const userReducer = userSlice.reducer
export const {logoutUser} = userSlice.actions