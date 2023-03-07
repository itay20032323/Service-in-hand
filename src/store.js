import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./components/slices/mainSlice";

export const store = configureStore({
    reducer: {
        mainSlice: mainSlice
    }
})
