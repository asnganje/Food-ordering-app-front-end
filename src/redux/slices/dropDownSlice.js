import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false
}

const dropDownSlice = createSlice({
    name: 'dropdown',
    initialState,
    reducers: {
        showMenu: (state) =>{
            state.isVisible = !state.isVisible
            const {isVisible} = state
            console.log(isVisible);
        },
        hideMenu: (state) =>{
            state.isVisible = false
        }
    }
})

export const {showMenu, hideMenu} = dropDownSlice.actions;
export const dropDownReducer = dropDownSlice.reducer