import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser, logoutUser } from "../thunks/userThunk";


const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user')
  if (!user) return null
  return JSON.parse(user)
}
const initialState = {
  isLoading: true,
  user: getUserFromLocalStorage()
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers(builder) {
    builder.addCase(createUser.pending, (state)=> {
      state.isLoading = true
    });
    builder.addCase(createUser.fulfilled, (state)=> {
      state.isLoading = false
    });
    builder.addCase(createUser.rejected, (state)=> {
      state.isLoading = false
    });
    builder.addCase(loginUser.pending, (state)=> {
      state.isLoading = true
    });
    builder.addCase(loginUser.fulfilled, (state, action)=> {
      state.isLoading = false
      const user = action.payload
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    });
    builder.addCase(loginUser.rejected, (state)=> {
      state.isLoading = false
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
  });
  builder.addCase(logoutUser.fulfilled, (state) => {
      state.isLoading = false;
      state.user = null;
      localStorage.removeItem('user');
  });
  builder.addCase(logoutUser.rejected, (state) => {
      state.isLoading = false;
  });
  }
})

export const userReducer = userSlice.reducer
