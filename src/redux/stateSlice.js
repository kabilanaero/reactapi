import { createSlice } from "@reduxjs/toolkit"


const stateSlice= createSlice({
    name:'sample',
    initialState:{
        isLoggedIn:JSON.parse(localStorage.getItem("isLoggedIn"))||false,
        forms:[],

    },
    reducers :{
     login: (state,action) => {
      state.isLoggedIn =action.payload;
     }
     
    }
})

export const {login} = stateSlice.actions;
export default stateSlice.reducer;