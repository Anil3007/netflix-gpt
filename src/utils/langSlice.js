import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "language",
    initialState: {
        selectedLang: "en"
    },
    reducers: {
        changeLang: (state, action) => {
            state.selectedLang = action.payload
        }
    }
})

export const {changeLang} = langSlice.actions

export default langSlice.reducer