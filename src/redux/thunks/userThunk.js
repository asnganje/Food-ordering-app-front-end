import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userUrl = "http://localhost:3000/api/v1/foodapp"

const createUser = createAsyncThunk('user/createUser', async (user)=> {
  const url = `${userUrl}/signup`
  try {
    await axios.post(url, user)
  } catch (error) {
    throw new Error(`Could not create user due to ${error}`)
  }
})

const loginUser = createAsyncThunk('user/loginUser', async (user)=> {
  const url = `${userUrl}/login`
  const {email} = user
  try {
    const response = await axios.post(url, {email})
    if (response.data) {
      return response.data
    }else {
      throw new Error(`Could not login user`);
  }  
  } catch (error) {
    throw new Error(error)
  }
})

export {createUser, loginUser}