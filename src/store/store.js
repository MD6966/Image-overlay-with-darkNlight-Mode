import { configureStore } from "@reduxjs/toolkit";
import themeSlice from './Slice'

export const store = configureStore({
    reducer : {
        theme : themeSlice

    }
})