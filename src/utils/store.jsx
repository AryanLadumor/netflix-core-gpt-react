import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"
import movieSlice from "./movieSlice"
import gptSlice from "./gptSlice"
import configSlice from "./configSlice"
const store = configureStore({
    reducer : {
        user : userSlice,
        movie : movieSlice,
        gpt : gptSlice,
        config : configSlice
    }
})

export default store;