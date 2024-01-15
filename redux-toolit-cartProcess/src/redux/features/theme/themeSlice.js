import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: JSON.parse(localStorage.getItem('darkMode')) || true
}

export const darkModeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.mode = !state.mode
            localStorage.setItem("darkMode", JSON.stringify(state.mode))
        }
    }
})

export const { toggleDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer

