import {createSlice} from "@reduxjs/toolkit"

const configSlice = createSlice({
    name :"Config",
    initialState : {
        seletecdLanguage : "en"
    },
    reducers : {
        changeLanguage(state,action ) {
            state.seletecdLanguage = action.payload
            
        }
    }
})


export default configSlice.reducer
export const {changeLanguage} = configSlice.actions